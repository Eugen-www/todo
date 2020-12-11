import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDelete,
      onToggleDone,
      onToggleImportant,
      done = false,
      important = false,
    } = this.props;

    let classNames = "todo-list-item";

    if (important) {
      classNames += " important";
    }

    if (done) {
      classNames += " done";
    }

    return (
      <div className={classNames}>
        <span className="todo-label">{label}</span>
        <button className="delete-btn" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <button className="complete-btn" onClick={onToggleDone}>
          <i className="fas fa-check"></i>
        </button>
        <button className="important-btn" onClick={onToggleImportant}>
          <i className="fas fa-exclamation"></i>
        </button>
      </div>
    );
  }
}
