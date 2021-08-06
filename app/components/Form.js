/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  form: {
    display: 'flex',
  },
});

export default function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

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
      {props.edit ? (
        <>
          <TextField
            id="outlined"
            variant="outlined"
            value={input}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            startIcon={<CheckIcon />}
          >
            Update
          </Button>
        </>
      ) : (
        <>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={input}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </>
      )}
    </form>
  );
}
