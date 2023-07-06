import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    // addTodo: {
    //   reducer(state, action: PayloadAction<Todo>) {
    //     state.todos.push(action.payload);
    //   },
    //   prepare(text: string) {
    //     return {
    //       payload: {
    //         id: Date.now(),
    //         text,
    //         completed: false,
    //       },
    //     };
    //   },
    // },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
