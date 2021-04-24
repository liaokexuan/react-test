import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Alert from '@material-ui/lab/Alert';

import { DevicesOther } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  grid: {
    marginLeft: '5px'
  },
  alert: {
    marginTop: "20px"
  }
}));

export default function LoginForm(props) {
  const { username, setUsername, invalidLogin, setInvalidLogin } = props;
  const classes = useStyles();
  const setName = e => {
    setInvalidLogin(false);
    const { name, value } = e.target;
    setUsername(pre => ({
      ...pre,
      ...{ [name]: value }
    }))
    // setFullName({...DevicesOther,[name]:value})
  }

  console.log(invalidLogin)

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item >
            <AccountCircle />
          </Grid>
          <Grid item className={classes.grid}>
            <TextField id="input-with-icon-grid" name="firstName" label="First name" onChange={setName} />
          </Grid>

          <Grid item  >
            <TextField id="input-with-icon-grid" name="lastName" label="Last name" onChange={setName} />
          </Grid>
          <Grid >
            {invalidLogin ? <Alert className={classes.alert} severity="error">Invalid username or password!</Alert> : ''}

          </Grid>


        </Grid>
      </div>
    </div>
  );
}