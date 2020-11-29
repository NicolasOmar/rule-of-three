import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
// INTERFACES
import { InputConfig, LabelConfig } from '@shared/interfaces/form.interfaces';
import { FormDataMockService } from './form-data.mock.service';

@Injectable({
  providedIn: 'root'
})
export class FormStructureMockService {
  private result$ = new BehaviorSubject<LabelConfig>(null);
  private inputs$ = new BehaviorSubject<Array<InputConfig>>([]);

  constructor(private formDataMockService: FormDataMockService) {}

  public setResults(config: LabelConfig) {
    this.result$.next(config);
  }

  public setInputs(config: Array<InputConfig>) {
    this.inputs$.next(config);
  }

  public getResult(): Observable<LabelConfig> {
    return of(this.formDataMockService.data[0].result);
  }

  public getInputs(): Observable<Array<InputConfig>> {
    return of(this.formDataMockService.data[0].inputs);
  }
}
