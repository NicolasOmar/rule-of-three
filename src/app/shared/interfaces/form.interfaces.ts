import { ColorEnum, SizeEnum, TypeEnum } from '@shared/enums/inputs.enums';

export interface FormStructure {
  first?: number;
  second?: number;
  third?: number;
}

export interface InputConfig {
  icon?: string;
  leftLabel?: string;
  rightLabel?: string;
  placeholder?: string;
  type?: TypeEnum;
  isReadonly?: boolean;
  baseValue?: string | number;
  setFocus?: boolean;
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
