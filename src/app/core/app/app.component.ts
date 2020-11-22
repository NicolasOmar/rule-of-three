import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
// SERVICES
import { AppInputService } from '@core/services/app-input.service';
// INTERFACES
import { LabelConfig } from '@shared/interfaces/inputs.interface';
// ENUMS
import { ColorEnum, SizeEnum } from '@shared/enums/inputs.enums';

interface FormStructure {
  first: number;
  second: number;
  third: number;
  fourth: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  public appForm: FormGroup;
  public mainTitle = 'Rule of Three';
  public isLoading = false;
  public contentWide = 10;
  public finalNumber: number;
  public result: LabelConfig = {
    size: SizeEnum.big,
    color: ColorEnum.red,
    value: null,
    unit: 'USD'
  };
  public formInputs;

  constructor(private fb: FormBuilder, private inputService: AppInputService) {}

  ngOnInit(): void {
    this.setForm();
    this.setLogic();
  }

  private setForm(): void {
    this.formInputs = this.inputService.appFormInputs;
    this.appForm = this.fb.group({
      first: [],
      second: [],
      third: []
    });
  }

  private setLogic(): void {
    this.sub.add(
      this.appForm.valueChanges.subscribe((changes: FormStructure) => {
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
