/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Form from '../../Components/Form';
import Todo from '../../Components/Todo';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    placeItems: 'center',
  },
});

export default function HomePage() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function updateTodo(todoId, newValue) {
    const index = todos.findIndex(t => t.id == todoId);
    todos[index].text = newValue;
    setTodos(todos);
  }

  function removeTodo(id) {
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h1 style={{ fontSize: '3em' }}>todos</h1>
      <Form onSubmit={addTodo} />

      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          // handleToggle={done}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
      ))}
    </Container>
  );
}
