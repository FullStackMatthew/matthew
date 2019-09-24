import React from 'react';
import {
    Tooltip,
    Paper,
    Button,
    CardContent,
    Grid   
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import "./ButtonCard.css"

export default function ButtonCard(props) {

    const disabled = props.disabled ? true : false;
    const tooltip = props.tooltip ? props.tooltip : props.text;

    return (
        <Tooltip title={tooltip}>
            <Paper {...props} className="paper" style={{textDecoration: 'none'}}>
                <Button className="button-card" disabled={disabled} component={Link} to={props.path}> 
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <img src={props.icon} alt={props.text} />
                        <CardContent>
                            {props.text}
                        </CardContent>
                    </Grid>
                </Button>
            </Paper>
        </Tooltip>
    );
}

//
    //         <Tooltip title="COMING SOON ..." placement="top">
    // </Tooltip>