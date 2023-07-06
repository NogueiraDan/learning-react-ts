import { Action } from "./types";
  
  const increment = (): Action => {
    return {
      type: 'INCREMENT',
    };
  };
  
  const decrement = (): Action => {
    return {
      type: 'DECREMENT',
    };
  };
  
  const toggleTheme = (): Action => {
    return {
      type: 'TOGGLE_THEME',
    };
  };
  
  export { increment, decrement, toggleTheme };
  