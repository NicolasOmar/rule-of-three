import { FormConfig, FormStructure } from '@shared/interfaces/form.interfaces';
// ENUMS
import { SizeEnum, ColorEnum, TypeEnum } from '@shared/enums/inputs.enums';

export const formDataMock: Array<FormConfig> = [
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
      size: SizeEnum.small,
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
      value: null,
      unit: 'USD'
    }
  }
];

export const randomInputValues: Array<string | number> = [1, 'a', 3, 'asd', 100];

export const formUpdateValues: Array<FormStructure> = [
  {
    first: 10,
    second: 15,
    third: 30
  },
  {
    first: 151,
    third: 65
  },
  {
    first: 10,
    second: 0.25
  },
  {
    first: 100,
    second: 250,
    third: 3
  }
];

export const returnRuleResult = (changes: FormStructure): string => {
  return changes.first && changes.second && changes.third
    ? ((changes.third * changes.first) / changes.second).toString()
    : null;
};
