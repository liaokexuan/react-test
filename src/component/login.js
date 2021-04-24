import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import loginForm from './loginForm'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Login(props) {
 // const [open, setOpen] = React.useState(false);
 const {openPopUp,setOpenPopUp,isLogin,setIsLogin,children}=props;
 
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    let username= children.props.username
    if(username ==="abc"){
      setIsLogin(true);
       
      setOpenPopUp(false);
    }
    
  };
  const handleCloseOutside=()=>{
    setOpenPopUp(false);

  }

  return (
    <div>
      <Dialog maxWidth="sm" fullWidth={true} onClose={handleCloseOutside} aria-labelledby="customized-dialog-title" open={openPopUp}>
        <DialogTitle id="customized-dialog-title" onClose={handleCloseOutside}>
        User
        </DialogTitle>
        <DialogContent dividers>
             {children}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
           Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
