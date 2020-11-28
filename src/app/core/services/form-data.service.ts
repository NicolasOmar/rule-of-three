import { Injectable } from '@angular/core';
// INTERFACES
import { FormConfig } from '@shared/interfaces/form.interfaces';
// ENUMS
import { SizeEnum, ColorEnum, TypeEnum } from '@shared/enums/inputs.enums';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  public data: Array<FormConfig> = [
    {
      inputs: [
        {
          leftLabel: 'If someone for',
          rightLabel: 'words',
          type: TypeEnum.Number
        },
        {
          leftLabel: 'Charges me',
          rightLabel: 'USD per word',
          type: TypeEnum.Number
        },
        {
          leftLabel: 'How much will cost for a project with',
          rightLabel: 'words',
          type: TypeEnum.Number
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
          rightLabel: 'USD per page',
          type: TypeEnum.Number
        },
        {
          leftLabel: 'And one page has',
          rightLabel: 'words',
          type: TypeEnum.Number
        },
        {
          leftLabel: 'How much will cost for',
          rightLabel: 'page/s',
          type: TypeEnum.Number
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
          rightLabel: 'USD',
          type: TypeEnum.Number
        },
        {
          leftLabel: 'For',
          rightLabel: 'hours',
          type: TypeEnum.Number,
          baseValue: 6
        },
        {
          leftLabel: 'How much will charge for',
          rightLabel: 'hour',
          type: TypeEnum.Number,
          baseValue: 1
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
          rightLabel: 'USD per hour',
          type: TypeEnum.Number
        },
        {
          leftLabel: 'And each hour are',
          rightLabel: 'words',
          type: TypeEnum.Number
        },
        {
          leftLabel: 'How much will charge for',
          rightLabel: 'word',
          type: TypeEnum.Number,
          baseValue: 1
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
