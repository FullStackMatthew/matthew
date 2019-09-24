import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid
} from '@material-ui/core';

//Components
import LogoSVG from '../../../components/icons/LogoSVG';


const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        width: '100%'
    },
    h1: {
        fontSize: '8em'
    }
}));

export default (props) => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.root}>
            <div><LogoSVG /></div>
            <h1 className={classes.h1}>WE LOVE NEWTRAX</h1>
        </Grid>
    )
}