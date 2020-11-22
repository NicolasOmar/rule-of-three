import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
// SERVICES
import { FormService } from '@core/services/form.service';
// INTERFACES
import { FormStructure, InputConfig, LabelConfig } from '@shared/interfaces/inputs.interface';

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

  constructor(private fb: FormBuilder, private formService: FormService) {}

  ngOnInit(): void {
    this.setForm();
    this.setLogic();
  }

  private setForm(): void {
    this.sub.add(this.formService.getResult().subscribe(config => (this.result = config)));

    this.sub.add(this.formService.getInputs().subscribe(config => (this.inputs = config)));

    this.ruleForm = this.fb.group({
      first: [],
      second: [],
      third: []
    });
  }

  private setLogic(): void {
    this.sub.add(
      this.ruleForm.valueChanges.subscribe((changes: FormStructure) => {
        this.result.value =
          changes.first && changes.second && changes.third
            ? ((changes.third * changes.second) / changes.first).toString()
            : null;
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
