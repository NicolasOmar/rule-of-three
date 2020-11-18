import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
// SERVICES
import { AppInputService } from '@core/services/app-input.service';

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
  public finalNumber: number;
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
      third: [],
      fourth: []
    });
  }

  private setLogic(): void {
    this.sub.add(
      this.appForm.valueChanges.subscribe((changes: FormStructure) => {
        if (changes.first && changes.second && changes.third) {
          this.finalNumber = (changes.third * changes.second) / changes.first;
        }
      })
    );
  }

  public onSubmit(): void {
    console.warn('test');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
