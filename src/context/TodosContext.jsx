import React, { useState } from "react";

export const TodosContext = React.createContext({});

const defaultTodos = [
  {
    id: Date.now(),
    title: "First todo",
    description: "Description",
    isDone: false,
    createdAt: new Date(),
  },
];

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(defaultTodos);
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
