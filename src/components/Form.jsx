import { TextField, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import "./form.css";

export default function Form({ todoHandler }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0)

  const todoCreate = (text) => {
    const todoObj = {
      text: text,
      id: id
    }
    setId(id + 1)
    todoHandler(todoObj)
  }

  return (
    <div id="form">
      <Paper className="paper-wrapper">
        <TextField
          id="outlined-basic"
          label="Digite sua tarefa..."
          fullWidth
          variant="outlined"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          className="addButton"
          variant="contained"
          onClick={() => {
            todoCreate(text)
          }}
        >
          Adicionar
        </Button>
      </Paper>
    </div>
  );
}
