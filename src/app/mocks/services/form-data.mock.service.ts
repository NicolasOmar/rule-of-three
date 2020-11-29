import { Injectable } from '@angular/core';
// INTERFACES
import { FormConfig } from '@shared/interfaces/form.interfaces';
// MOCKS
import { formDataMock } from '@mocks/data/form-data.mock';

@Injectable({
  providedIn: 'root'
})
export class FormDataMockService {
  public data: Array<FormConfig> = [...formDataMock];
}
