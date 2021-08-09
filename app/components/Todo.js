import React, { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Todo({ todo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState();

  const [editable, setEditable] = useState(false);

  return (
    <div
      style={{
        width: 320,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      {editable ? (
        <>
          <TextField
            value={edit}
            onChange={e => {
              setEdit(e.target.value);
            }}
          />
          <IconButton
            onClick={() => {
              setEditable(false);
              updateTodo(todo.id, edit);
            }}
          >
            update
          </IconButton>
        </>
      ) : (
        <>
          <div
            style={{
              fontSize: '1.25em',
              height: 50,
              width: '80%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {todo.text}
          </div>
          <IconButton
            onClick={e => {
              setEditable(true);
              setEdit(todo.text);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => removeTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </div>
  );
}
