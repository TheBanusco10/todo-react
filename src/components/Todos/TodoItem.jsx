import React, { useContext } from "react";
import { TodosDispatchContext } from "@/context/TodosContext";

const TodoItem = (props) => {
  const { title, description, isDone, createdAt, id, index } = props;
  const dispatch = useContext(TodosDispatchContext);

  const removeTodo = () => {
    dispatch({
      type: "removed",
      index,
    });
  };

  return (
    <article className="border rounded shadow w-44 lg:w-60">
      <div className="border-b p-2">
        <p className="text-xl">{title}</p>
      </div>
      <div className="p-2">{description}</div>
      <div className="p-2">
        <button onClick={removeTodo}>Remove</button>
      </div>
    </article>
  );
};

export default TodoItem;
