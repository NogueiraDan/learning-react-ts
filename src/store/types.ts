// O nome "counter" deve ser o mesmo do reducer em store.ts
export type RootState = {
  counter: CounterState;
  theme: ThemeState;
};

export type CounterState = {
  count: number;
};

export type ThemeState = {
  theme: string;
};
