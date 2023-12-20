import { types, getParent } from "mobx-state-tree";

const todo = types
  .model({
    text: "",
    isDone: false
  })
  .actions(self => ({
    toggle() {
      self.isDone = !self.isDone;
    },
    remove() {
      getParent(self, 2).remove(self);
    }
  }));

export default todo;
