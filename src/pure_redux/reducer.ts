import { Action, CounterState, ThemeState } from "./types";

const initialCounterState: CounterState = {
  count: 0,
};

const initialThemeState: ThemeState = {
  theme: "light",
};

const counterReducer = (
  state = initialCounterState,
  action: Action
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const themeReducer = (
  state = initialThemeState,
  action: Action
): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export { counterReducer, themeReducer };
