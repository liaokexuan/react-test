import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  grid:{
    marginLeft:'5px'
  }
}));

export default function LoginForm(props) {
  const {username,setUsername,getFormValue} =props;
  const classes = useStyles();
  const setFirstName=(e)=>{
     setUsername(e)
  }

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item className={classes.grid}>
            <TextField id="input-with-icon-grid" label="First name" onChange={(e)=>setFirstName(e.target.value)}/>
          </Grid>

          <Grid item>
            <TextField id="input-with-icon-grid" label="Last name" />
          </Grid>
          
        </Grid>
      </div>
    </div>
  );
}