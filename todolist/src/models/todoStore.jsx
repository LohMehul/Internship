import React from "react";
import { useProvider, useCreateStore } from "mobx-store-provider";
import todoList from "./todoList.jsx";

const initialTodos = {
  todos: [
    { text: "Prepare demos", isDone: true },
    { text: "Present demos", isDone: false },
    { text: "Make a drink", isDone: false }
  ]
};

const TodoStoreProvider = ({ children }) => {
  const todoStore = useCreateStore(() => todoList.create(initialTodos));
  const Provider = useProvider();
  return <Provider value={todoStore}>{children}</Provider>;
};

export default TodoStoreProvider;
