import React, { useContext } from "react";
import { TodosDispatchContext } from "@/context/TodosContext";

const TodoItem = (props) => {
  const { title, description, isDone, createdAt, id, index } = props;
  const dispatch = useContext(TodosDispatchContext);

  const removeTodo = () => {
    dispatch({
      type: "removed",
      id,
    });
  };

  const isDoneTodo = () => {
    dispatch({
      type: "done",
      index,
      done: !isDone,
    });
  };

  return (
    <article className="border rounded shadow w-44 lg:w-60">
      <div className="flex justify-between items-center border-b p-2">
        <p className="text-xl">{title}</p>
        {isDone && <div className="w-6 h-6 bg-emerald-600 rounded-full"></div>}
      </div>
      <div className="p-2">{description}</div>
      <div className="flex justify-between items-center p-2">
        <button onClick={removeTodo}>Remove</button>
        <button onClick={isDoneTodo}>Done</button>
      </div>
    </article>
  );
};

export default TodoItem;
