import React, { Suspense } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    AppBar,
    Drawer,
    Divider,
    Toolbar,
    Typography,
    Grid
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import MenuOpen from '@material-ui/icons/MenuOpen';

//Components
import Brand from './Brand';
import MenuItem from './MenuItem';
import Language from '../language/Language';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(2)
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    brandIcon: {
        height: '100%',
        padding: '9px',
        marginLeft: '-11px',
        marginRight: theme.spacing(2)
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawerOpen: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    sidenav: {
        backgroundColor: theme.palette.primary.main,
    },
    brand: {
        margin: '5px 15px 0 5px'
    },
    brandContainer: {
        textDecoration: 'none',
        color: theme.palette.text.primary

    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default (props) => (
    <Suspense fallback="loading">
        <HeaderComponent {...props} />
    </Suspense>
);

function HeaderComponent(props) {
    const [toggle, setToggle] = React.useState(props.opened || false);
    const classes = useStyles();
    const { t } = useTranslation();

    const showMenu = props.showMenu === true ? true : false;
    const showBrand = props.showBrand === true && toggle === false ? true : false;
    const menuItems = props.menu || [];

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: toggle,
                })}
                color="default"
            >
                <Toolbar>

                    {(showBrand === false ? '' :
                        (<div className={classes.brandIcon}>
                            <Brand />
                        </div>)
                    )}

                    {(showMenu === false ? '' :
                        (
                            (toggle === false ?
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={(e) => setToggle(!toggle)} >
                                    <MenuIcon />
                                </IconButton>
                                :
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={(e) => setToggle(!toggle)} >
                                    <MenuOpen />
                                </IconButton>
                            )))
                    }

                    <Typography variant="h6" className={classes.title}>
                        {t(props.title)}
                    </Typography>
                    <Language />
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
            <Drawer
                variant='persistent'
                anchor="left"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: toggle,
                    [classes.drawerClose]: !toggle,
                })}
                classes={{
                    paper: classes.drawerPaper,
                }}
                open={toggle}
            >
                <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    direction="row"
                    className={clsx(classes.sidenav, classes.brandContainer)}
                    component={Link}
                    to="/home"
                >
                    <div className={classes.brand}>
                        <Brand />
                    </div>
                    <h2>NEWTRAX</h2>
                </Grid>

                <Divider />
                {
                    menuItems.map((menuItem, index) => (<MenuItem item={menuItem} key={index} />))
                }
            </Drawer>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: toggle,
                })}
            >
                <div className={classes.drawerHeader} />
                {props.children}
            </main>
        </div >
    );
}

