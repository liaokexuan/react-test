import React from 'react';
import './App.css';
import Count from './component/count';
import { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Login from './component/login'
import DataGridDemo from './component/dataGrid';
 
import LoginForm from './component/loginForm'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  dataGrid: {
    padding: theme.spacing(2),
    marginTop: '20px'
  },
  login:{
    fontSize:"50px",
    textAlign:"center",
    margin:"20px 0 0 0 ",
    color: "grey"
  }
 
}));
function App() {
  const classes = useStyles();

  const login = () => {
    if (name == "abc") {
      setValue(true)
    }
    console.log('form value' + name)
  }
  const nameChange = (e) => {
    setName(e.target.value)
  }
  const getData = (data) => {
    setName(data)
  }
  const getFormValue = (data) => {
    debugger
      console.log(data)
  }
 
  const [name, setName] = useState("")
  const [value, setValue] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false)
  const [username,setUsername] = useState(null)
  const [isLogin,setIsLogin] = useState(false)
  const [invalidLogin, setInvalidLogin] = useState(false)

  const handleLoginAndLoginout=()=>{
    if(isLogin){
      setUsername(null);
      setIsLogin(false);
    }else{
      setOpenPopUp(true);
    }
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit" onClick={handleLoginAndLoginout}>{isLogin?"Login out":"Login"} </Button>
        </Toolbar>
      </AppBar>
      <Login openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} setIsLogin={setIsLogin} setInvalidLogin={setInvalidLogin}>
         <LoginForm username={username} setUsername={setUsername} getFormValue={getFormValue} setInvalidLogin={setInvalidLogin} invalidLogin={invalidLogin} />
      </Login>
      {isLogin?<DataGridDemo classes={{dataGrid:'MuiDataGrid-main'}}/>: <div className={classes.login}>Please login in the page</div>}
      {/* <input name="name" type="text" value={name} onChange={(e) => nameChange(e)} />
      <Count value={value} callBack={getData} />
      <button onClick={() => login()}>
        login
        </button>
      {value ? "login" : "logout"} */}
    </div>
  );
}

export default App;
