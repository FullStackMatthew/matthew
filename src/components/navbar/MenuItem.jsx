import React, { Suspense } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    makeStyles,
    Collapse
}
    from '@material-ui/core'

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PlayArrow from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    selectItem: {
        '&:hover': {
            borderRight: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.text.primary,
            fill: theme.palette.text.primary
        },
    },
    nested: {
        color: theme.palette.text.disabled,
        fill: theme.palette.text.disabled,
        paddingLeft: theme.spacing(6),
    },
}));

export default (props) => (
    <Suspense fallback="loading">
        <MenuItem {...props} />
    </Suspense>
)

function MenuItem(props) {
    const [open, setOpen] = React.useState(false);
    const { t } = useTranslation();

    const classes = useStyles();
    var itemMenu = props.item;

    if (!itemMenu) {
        return;
    }
    return (
        <List>
            <ListItem button onClick={() => setOpen(!open)} className={classes.selectItem} key={itemMenu.group}>
                {/* <ListItemIcon>
                    <StarBorder />
                </ListItemIcon> */}
                <ListItemText primary={t(itemMenu.group)} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        itemMenu.items.map((item) => (
                            <ListItem
                                button
                                className={clsx(classes.drawer, classes.selectItem)}
                                component={Link} to={item.path}
                                key={item.key}
                                >
                                <ListItemIcon>{<PlayArrow />}</ListItemIcon>
                                <ListItemText primary={t(item.key)} />
                            </ListItem>
                        ))
                    }
                </List>
            </Collapse>
        </List>
    );
}