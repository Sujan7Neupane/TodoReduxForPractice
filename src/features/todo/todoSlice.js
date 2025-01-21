import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, todo: "todo msg hello" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        todo: action.payload,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.todo }
          : todo
      );
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    setTodos: (state, action) => {
      // Replace all todos with a new array
      state.todos = action.payload.todos;
    },
    toggleAll: (state) => {
      const allCompleted = state.todos.every((todo) => todo.completed);
      state.todos = state.todos.map((todo) => ({
        ...todo,
        completed: !allCompleted,
      }));
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
