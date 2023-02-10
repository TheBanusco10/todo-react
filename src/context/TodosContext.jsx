import React, { useReducer, useState } from "react";
import TodosReducer from "../reducers/TodosReducer";

export const TodosContext = React.createContext({});
export const TodosDispatchContext = React.createContext(null);

const defaultTodos = JSON.parse(localStorage.getItem("todos")) || [];

const TodosContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(TodosReducer, defaultTodos);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
