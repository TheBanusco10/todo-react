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

    case "removed": {
      const { index } = action;
      const newTodos = todos.slice();
      newTodos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify([...newTodos]));
      return [...newTodos];
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default TodosReducer;
