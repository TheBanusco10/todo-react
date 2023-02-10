import React, { useContext } from "react";
import { TodosContext } from "@/context/TodosContext";
import TodoItem from "@/components/Todos/TodoItem";

const TodosList = () => {
  const todos = useContext(TodosContext);

  return (
    <section className="flex flex-wrap justify-center gap-4">
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <TodoItem {...todo} index={index} key={todo.id} />
        ))
      ) : (
        <p>There is no Todos</p>
      )}
    </section>
  );
};

export default TodosList;
