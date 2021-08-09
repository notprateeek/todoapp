/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3em',
  },
});

export default function Form(props) {
  const [input, setInput] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 999),
      text: input,
    });
    setInput('');
  }

  const classes = useStyles();

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={input}
        onChange={handleChange}
      />
      <Button
        color="primary"
        variant="contained"
        onClick={handleSubmit}
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </form>
  );
}
