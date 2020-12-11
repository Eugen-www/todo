import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  state = { value: "all" };

  options = [
    { name: "all", label: "All" },
    { name: "completed", label: "Completed" },
    { name: "uncompleted", label: "Uncompleted" },
  ];

  render() {
    const elements = this.options.map(({ name, label }) => {
      return (
        <option key={name} value={name}>
          {label}
        </option>
      );
    });

    return (
      <div className="select-container">
        <select value={this.state.value} name="todos" id="filter-todo">
          {elements}
        </select>
      </div>
    );
  }
}
