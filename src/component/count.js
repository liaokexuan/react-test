import React from 'react'
import { Button, Container,Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles=makeStyles((theme)=>({

    paper:{
        textAlign:'center',
        color:theme.palette.text.primary,
        background:'grey',
        height:'200px'
    }
})
);

const Count = (props) => {
    const classes = useStyles();

    const add = () => {
        props.callBack('test')
    }
    return (
        <div>
            <Container>
                <Button color="secondary" onClick={() => add()}>
                    pass data from child
                </Button>
                <div>
                    {props.value}
                </div>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>item</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>item</Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Count;
