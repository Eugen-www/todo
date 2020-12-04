import React from "react";

import "./todo-list-item.css";

const TodoListItem = ({ label }) => {
  return (
    <div className="todo-list-item">
      <span className="todo-label">{label}</span>
      <button className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>
    </div>
  );
};

export default TodoListItem;
