import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";
import { Container, List } from "@mui/material";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const todoHandler = (todo) => {
    setTodos([...todos, todo])
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1rem" }}>
      <Form todoHandler={todoHandler} />
      <List
        sx={{
          width: "100%",
          // bgcolor: "background.paper",
          marginTop: "1rem",
          borderRadius: ".5rem"
        }}
      >
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </List>
    </Container>
  );
}
