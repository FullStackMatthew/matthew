import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        height: '90%',
        width: '100%'
    },
    map: {
        border: 'none',
        height: '100%',
        width: '100%'
    }
}));

export default (props) => {
    const classes = useStyles();
    return (
        <div
            className={classes.root}>
            <iframe src="https://b3.webgears3d.com/mine-demo-cf2ee80/" className={classes.map} title="map"></iframe>
        </div>
    )
}