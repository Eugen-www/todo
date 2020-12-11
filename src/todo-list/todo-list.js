import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";

import "./todo-list.css";

const TodoList = ({ todos, deleteItem, onToggleDone, onToggleImportant }) => {
  const elements = todos.map((todo) => {
    const { id, ...otherProps } = todo;

    return (
      <li key={id}>
        <TodoListItem
          {...otherProps}
          onDelete={() => deleteItem(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;
