import { ColorEnum, SizeEnum } from '@shared/enums/inputs.enums';

export interface FormStructure {
  first: number;
  second: number;
  third: number;
  fourth: number;
}

export interface InputConfig {
  icon?: string;
  leftLabel?: string;
  rightLabel?: string;
  placeholder?: string;
  type?: string;
  isReadonly?: boolean;
}

export interface LabelConfig {
  size?: SizeEnum;
  color?: ColorEnum;
  value?: string;
  unit?: string;
}

export interface FormConfig {
  inputs: Array<InputConfig>;
  result: LabelConfig;
}
