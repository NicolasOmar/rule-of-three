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
          leftLabel: 'Me cobra',
          rightLabel: 'USD por hora',
          type: TypeEnum.Number
        },
        {
          leftLabel: 'La hora equivale a',
          rightLabel: 'palabras',
          type: TypeEnum.Number
        },
        {
          leftLabel: '¿Cuánto me cobra por',
          rightLabel: 'palabra',
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
          leftLabel: 'Cobra',
          rightLabel: 'USD por jornada',
          type: TypeEnum.Number
        },
        {
          leftLabel: 'Y una jornada tiene',
          rightLabel: 'horas',
          type: TypeEnum.Number,
          baseValue: 6
        },
        {
          leftLabel: '¿Cuánto me cobra por',
          rightLabel: 'hora?',
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
          leftLabel: 'Me cobra',
          rightLabel: 'por página',
          type: TypeEnum.Number
        },
        {
          leftLabel: 'Y cada página tiene',
          rightLabel: 'palabras',
          type: TypeEnum.Number
        },
        {
          leftLabel: '¿Cuánto me cobra por',
          rightLabel: 'palabra?',
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
