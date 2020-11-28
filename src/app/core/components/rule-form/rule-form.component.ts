import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
// SERVICES
import { FormStructureService } from '@core/services/form-structure.service';
// INTERFACES
import { FormStructure, InputConfig, LabelConfig } from '@shared/interfaces/form.interfaces';

@Component({
  selector: 'rule-form',
  templateUrl: './rule-form.component.html',
  styleUrls: ['./rule-form.component.scss']
})
export class RuleFormComponent implements OnInit {
  private sub = new Subscription();
  public ruleForm: FormGroup;
  public result: LabelConfig;
  public inputs: Array<InputConfig>;
  public formInputs;

  constructor(private fb: FormBuilder, private formService: FormStructureService) {}

  ngOnInit(): void {
    this.listenServices();
  }

  private listenServices(): void {
    this.sub.add(
      this.formService.getResult().subscribe(resultConfig => (this.result = resultConfig))
    );
    this.sub.add(
      this.formService.getInputs().subscribe(inputsConfig => {
        this.inputs = inputsConfig;
        this.setForm();
      })
    );
  }

  private setForm(): void {
    const validators = [Validators.required];
    this.ruleForm = this.fb.group({
      first: [this.inputs[0].baseValue || null, [...validators]],
      second: [this.inputs[1].baseValue || null, [...validators]],
      third: [this.inputs[2].baseValue || null, [...validators]]
    });
    this.setResultLogic();
  }

  private setResultLogic(): void {
    this.sub.add(
      this.ruleForm.valueChanges.subscribe((changes: FormStructure) => {
        this.result.value =
          changes.first && changes.second && changes.third && this.ruleForm.valid
            ? ((changes.third * changes.second) / changes.first).toString()
            : null;
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
