import { Injectable } from '@angular/core';
// INTERFACES
import { FormConfig } from '@shared/interfaces/inputs.interface';
// ENUMS
import { SizeEnum, ColorEnum } from '@shared/enums/inputs.enums';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  public mainFormData: FormConfig = {
    inputs: [
      {
        leftLabel: 'If someone charges',
        rightLabel: 'USD per word'
      },
      {
        leftLabel: 'For',
        rightLabel: 'words'
      },
      {
        leftLabel: 'How much will cost for a project with',
        rightLabel: 'words'
      }
    ],
    result: {
      size: SizeEnum.big,
      color: ColorEnum.red,
      value: null,
      unit: 'USD'
    }
  };
}
