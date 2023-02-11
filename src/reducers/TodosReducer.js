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
      const { id } = action;
      const newTodos = todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify([...newTodos]));
      return [...newTodos];
    }

    case "done": {
      const { index, done } = action;
      todos[index].isDone = done;
      localStorage.setItem("todos", JSON.stringify([...todos]));
      return [...todos];
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default TodosReducer;
