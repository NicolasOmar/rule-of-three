import { ColorEnum, SizeEnum } from '@shared/enums/inputs.enums';

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
