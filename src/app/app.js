import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import ItemAddForm from "../item-add-form/item-add-form";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";

import "./app.css";

export default class App extends Component {
  id = 0;

  state = {
    todoData: [
      this.createTodo("Drink Coffee "),
      this.createTodo("Make a React App"),
      this.createTodo("Make a homework"),
    ],
    filter: "all",
  };

  createTodo(label) {
    return { label, id: this.id++, done: false, important: false };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => id === item.id);
      const items = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: items,
      };
    });
  };
  addItem = (label) => {
    this.setState(({ todoData }) => {
      return { todoData: [...todoData, this.createTodo(label)] };
    });
  };

  onToggleProps(array, id, propName) {
    const idx = array.findIndex((item) => id === item.id);
    const oldItem = array[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...array.slice(0, idx), newItem, ...array.slice(idx + 1)];
  }
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const items = this.onToggleProps(todoData, id, "important");
      return {
        todoData: items,
      };
    });
  };
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const items = this.onToggleProps(todoData, id, "done");
      return {
        todoData: items,
      };
    });
  };
  onChangeFilter = (filter) => {
    this.setState({ filter });
  };
  filter = (filter, array) => {
    switch (filter) {
      case "completed":
        return array.filter((item) => item.done);
      case "uncompleted":
        return array.filter((item) => !item.done);
      case "all":
        return array;
      default:
        return array;
    }
  };
  render() {
    const { todoData, filter } = this.state;
    const visibleItems = this.filter(filter, todoData);
    return (
      <div className="app">
        <AppHeader />
        <div className="panel">
          <ItemAddForm onItemAdd={this.addItem} />
          <ItemStatusFilter
            filter={filter}
            onChangeFilter={this.onChangeFilter}
          />
        </div>
        <TodoList
          todos={visibleItems}
          deleteItem={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
      </div>
    );
  }
}
