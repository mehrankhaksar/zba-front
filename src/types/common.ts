export type OptionType<T = string> = {
  label: string;
  value: T;
  [key: string]: any;
};
