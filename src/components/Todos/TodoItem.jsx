import React from "react";

const TodoItem = (props) => {
  const { title, description, isDone, createdAt } = props;
  return (
    <div>
      {title} - {description}
    </div>
  );
};

export default TodoItem;
