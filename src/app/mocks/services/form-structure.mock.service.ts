import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// INTERFACES
import { InputConfig, LabelConfig } from '@shared/interfaces/form.interfaces';
import { FormDataMockService } from './form-data.mock.service';

@Injectable({
  providedIn: 'root'
})
export class FormStructureMockService {
  constructor(private formDataMockService: FormDataMockService) {}

  public setResults(): void {
    return;
  }

  public setInputs(): void {
    return;
  }

  public getResult(): Observable<LabelConfig> {
    return of(this.formDataMockService.data[0].result);
  }

  public getInputs(): Observable<Array<InputConfig>> {
    return of(this.formDataMockService.data[0].inputs);
  }
}
