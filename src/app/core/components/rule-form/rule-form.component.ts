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
    this.setForm();
    this.setLogic();
  }

  private setForm(): void {
    const regex = /(\d|\.)/gm;
    const validators = [Validators.required, Validators.pattern(regex)];

    this.sub.add(this.formService.getResult().subscribe(config => (this.result = config)));
    this.sub.add(this.formService.getInputs().subscribe(config => (this.inputs = config)));

    this.ruleForm = this.fb.group({
      first: [null, [...validators]],
      second: [null, [...validators]],
      third: [null, [...validators]]
    });
  }

  private setLogic(): void {
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
