import React, { useContext, useState } from "react";
import { TodosDispatchContext } from "@/context/TodosContext";

const newTodoInitialState = {
  id: "",
  title: "",
  description: "",
  isDone: false,
  createdAt: "",
};

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState(newTodoInitialState);

  const dispatch = useContext(TodosDispatchContext);

  const handleAddTodo = (evt) => {
    evt.preventDefault();

    dispatch({
      type: "added",
      newTodo,
    });

    setNewTodo(newTodoInitialState);
  };

  const handleOnChange = (evt) => {
    const { name, value, checked, type } = evt.target;

    setNewTodo({
      ...newTodo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <section className="mt-4">
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          className="w-full mb-4 border rounded p-1"
          placeholder="Title"
          name="title"
          value={newTodo.title}
          onChange={handleOnChange}
        />
        <textarea
          placeholder="Description"
          className="w-full mb-4 border rounded p-1"
          name="description"
          value={newTodo.description}
          onChange={handleOnChange}
        ></textarea>
        <label htmlFor="isDone" className="mr-4">
          Is Done
        </label>
        <input
          type="checkbox"
          id="isDone"
          className="mb-4 border rounded p-1"
          name="isDone"
          checked={newTodo.isDone}
          onChange={handleOnChange}
        />
        <button className="w-full p-2 rounded shadow bg-emerald-600 text-white">
          Add
        </button>
      </form>
    </section>
  );
};

export default AddTodo;
