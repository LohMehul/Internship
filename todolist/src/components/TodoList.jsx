import React, { useRef } from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";

// Components
import { ListGroup, ListGroupItem, Button, InputGroup, Stack } from "react-bootstrap";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todos, addTodo } = useStore();
  const textInput = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const inputText = textInput.current.value;
    if (inputText.length < 1) return false;
    addTodo({
      text: inputText
    });
    e.target.reset();
    textInput.current.focus();
  };

  return (
    <>
      <ListGroup spacing="1em" mt="2em" mb="3em">
        {todos.map((todo, idx) => (
          <ListGroupItem key={idx}>
            <TodoListItem todo={todo} />
          </ListGroupItem>
        ))}
      </ListGroup>
      <form onSubmit={handleSubmit}>
        <Stack direction="row">
          <Button
            arialLabel="Add"
            icon="add"
            size="lg"
            variantColor="green"
            type="submit"
            shadow="md"
            title="Add new task"
            isRound="true"
          />
          <InputGroup
            h="3em"
            ml="0.5em"
            ref={textInput}
            type="text"
            variant="flushed"
            placeholder="Add New Task"
          />
        </Stack>
      </form>
    </>
  );
};

export default observer(TodoList);
