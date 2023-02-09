import { useContext, useState } from "react";
import AddTodo from "./components/Todos/AddTodo";
import TodosList from "./components/Todos/TodosList";
import TodosContextProvider, { TodosContext } from "./context/TodosContext";

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <TodosContextProvider>
        <AddTodo />
        <p>Your TODOs</p>
        <TodosList />
      </TodosContextProvider>
    </div>
  );
}

export default App;
