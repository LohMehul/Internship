import React from "react";
import { observer } from "mobx-react";

// Components
// import { Box } from "react-bootstrap";
import CardHeader from "./CardHeader";
import TodoList from "./TodoList";

const Card = () => {
  return (
    <div
      position="relative"
      bg="white"
      rounded="md"
      p="2em"
      w="25em"
      mt="4em"
      mx="auto"
      shadow="lg"
    >
      <CardHeader />
      <TodoList />
    </div>
  );
};

export default observer(Card);
