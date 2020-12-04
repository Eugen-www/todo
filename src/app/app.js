import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import ItemAddForm from "../item-add-form/item-add-form";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";

import "./app.css";

export default class App extends Component {
  todoData = [
    { label: "Drink Coffee", id: 0 },
    { label: "Coffee", id: 1 },
  ];

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="panel">
          <ItemAddForm />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.todoData} />
      </div>
    );
  }
}
