import { types } from "mobx-state-tree";
import todo from "./todo.jsx";

const todoList = types
  .model({
    todos: types.array(todo)
  })
  .views(self => ({
    countAll() {
      return self.todos.length;
    },
    countDone() {
      return self.todos.filter(todo => todo.isDone).length;
    },
    progress() {
      return ((self.countDone() / self.countAll() || 0) * 100).toFixed(0);
    },
    countLabel() {
      const countAll = self.countAll();
      return `${countAll === 0 ? "No" : countAll} task${
        countAll !== 1 ? "s" : ""
      }`;
    }
  }))
  .actions(self => ({
    addTodo(todo) {
      self.todos.push(todo);
    },
    remove(item) {
      self.todos.splice(self.todos.indexOf(item), 1);
    }
  }));

export default todoList;
