import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.ts';
import themeReducer from './themeSlice.ts';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer
  },
});

export default store;
