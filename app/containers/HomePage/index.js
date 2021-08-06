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
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  h1: {
    fontSize: '4em',
  },
});

export default function HomePage() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  }

  function updateTodo(todoId, newValue) {
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }

  function removeTodo(id) {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  }

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h1 className={classes.h1}>todos</h1>
      <Form className={classes.form} onSubmit={addTodo} />
      <Todo todos={todos} updateTodo={updateTodo} removeTodo={removeTodo} />
    </Container>
  );
}
