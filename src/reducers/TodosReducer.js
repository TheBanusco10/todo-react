import React from "react";

const TodosReducer = (todos, action) => {
  switch (action.type) {
    case "added": {
      const { newTodo } = action;
      newTodo.id = Date.now();
      newTodo.createdAt = new Date();
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      return [...todos, newTodo];
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default TodosReducer;
