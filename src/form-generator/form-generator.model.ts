interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  nullValidator?: boolean;
  customValidatorFunction?: Function;
}

export interface JsonFormcolsSpan {
  default: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  '2xl'?: number;
}

type colsGrid = 0 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface JsonFormControls {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string | string[];
  content?: string;
  type?: string;
  messageInfo?: string;
  messageError?: string;
  colsSpan?: JsonFormcolsSpan;
  validators?: JsonFormValidators;
  required?: boolean;
  disabled?: boolean;
  options?: JsonFormControlOptions;
  cssClasses?: string;
}

interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
  disabled?: boolean;
  // A completer avec les options @Input possible des composants du DS
}

interface JsonFormBloc {
  id: string;
  title?: string;
  bgColor?: boolean;
  controls: JsonFormControls[];
}

export interface PredefinedFormValues {
  [key: string]: string;
}

export interface JsonFormData {
  blocs: JsonFormBloc[];
}
