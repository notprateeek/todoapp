import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Form from './Form';

export default function Todo({ todos, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: '' });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: '' });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
      key={index}
    >
      <div
        style={{
          height: 50,
          width: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        key={todo.id}
      >
        {todo.text}
      </div>
      <EditIcon
        style={{ color: 'yellow' }}
        onClick={() => setEdit({ id: todo.id, value: todo.text })}
      />
      <DeleteIcon
        style={{ color: 'red' }}
        onClick={() => removeTodo(todo.id)}
      />
    </div>
  ));
}
