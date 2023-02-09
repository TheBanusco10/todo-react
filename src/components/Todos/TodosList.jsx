import React, { useContext } from "react";
import { TodosContext } from "../../context/TodosContext";
import TodoItem from "./TodoItem";

const TodosList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <section>
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </section>
  );
};

export default TodosList;
