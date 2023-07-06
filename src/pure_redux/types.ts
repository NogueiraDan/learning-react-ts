export type CounterState = {
  count: number;
};

export type ThemeState = {
  theme: string;
};

export type RootState = {
  counter: CounterState;
  theme: ThemeState;
};

export type Action = {
  type: string;
  payload?: any;
};
