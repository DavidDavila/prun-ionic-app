export type GeneralFilterT = {
  order: string[];
  filters: { [key: string]: InputT[] };
};
export type InputT = {
  label: string;
  defaultValue?: any;
  placeholder?: string;
  value?: any;
  type: 'checkbox' | 'radio';
};
