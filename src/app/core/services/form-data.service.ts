import { Injectable } from '@angular/core';
// INTERFACES
import { FormConfig } from '@shared/interfaces/form.interfaces';
// ENUMS
import { SizeEnum, ColorEnum } from '@shared/enums/inputs.enums';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  public data: Array<FormConfig> = [
    {
      inputs: [
        {
          leftLabel: 'If someone for',
          rightLabel: 'words'
        },
        {
          leftLabel: 'Charges me',
          rightLabel: 'USD per word'
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
    },
    {
      inputs: [
        {
          leftLabel: 'If someone charges',
          rightLabel: 'USD per page'
        },
        {
          leftLabel: 'And one page has',
          rightLabel: 'words'
        },
        {
          leftLabel: 'How much will cost for',
          rightLabel: 'page/s'
        }
      ],
      result: {
        size: SizeEnum.big,
        color: ColorEnum.red,
        value: null,
        unit: 'USD'
      }
    },
    {
      inputs: [
        {
          leftLabel: 'If someone charges',
          rightLabel: 'USD'
        },
        {
          leftLabel: 'For',
          rightLabel: 'hours'
        },
        {
          leftLabel: 'How much will charge for',
          rightLabel: 'hour'
        }
      ],
      result: {
        size: SizeEnum.big,
        color: ColorEnum.red,
        value: null,
        unit: 'USD'
      }
    }
  ];
}
