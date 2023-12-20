import React from "react";
import { observer } from "mobx-react";

import { Checkbox, Button, Stack, } from "react-bootstrap";

const TodoListItem = ({ todo }) => {
  const handleChange = e => {
    todo.toggle();
  };

  const handleTrash = e => {
    todo.remove();
  };

  return (
    <>
      <Stack spacing="4" display="flex" w="100%" direction="row">
        <Button
          variant={todo.isDone ? "solid" : "outline"}
          size="sm"
          onClick={handleChange}
          variantColor="green"
          icon="check"
          isRound="true"
          title={`${todo.isDone ? "Unamrk" : "Mark"} task as completed`}
        />
        <div
          as={todo.isDone ? "del" : null}
          color={todo.isDone ? "gray.400" : null}
          fontSize="xl"
          flexGrow="1"
          isTruncated
        >
          {todo.text}
        </div>
        <Button
          aria-label="Delete Item"
          variant="outline"
          variantColor="red"
          icon="delete"
          size="sm"
          onClick={handleTrash}
          isRound="true"
          title="Remove task"
        />
      </Stack>
    </>
  );
};

export default observer(TodoListItem);
