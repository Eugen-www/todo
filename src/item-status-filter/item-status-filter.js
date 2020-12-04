import React from "react";

import "./item-status-filter.css";

const ItemStatusFilter = () => {
  return (
    <div className="select-container">
      <select name="todos" id="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default ItemStatusFilter;
