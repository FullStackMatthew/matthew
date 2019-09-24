import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {
    ListItem,
} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import BrazilSVG from '../icons/BrazilFlag.svg';
import UnitedKingdomSVG from '../icons/UnitedKingdom.svg';
import FranceFlag from '../icons/FranceFlag.svg';
import SpainFlag from '../icons/SpainFlag.svg';
import RussiaFlag from '../icons/RussiaFlag.svg';
import PolandFlag from '../icons/PolandFlag.svg';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    flag: {
        width: '32px',
        marginRight: '5px'
    }
}));

const options = [
    {
        icon: UnitedKingdomSVG,
        name: 'English',
        code: 'en-US'
    },
    {
        icon: BrazilSVG,
        name: 'Português',
        code: 'pt-BR'
    },
    {
        icon: FranceFlag,
        name: 'French',
        code: 'fr'
    },
    {
        icon: SpainFlag,
        name: 'Spain',
        code: 'es'
    },
    {
        icon: RussiaFlag,
        name: 'Russia',
        code: 'ru'
    },
    {
        icon: PolandFlag,
        name: 'Polish',
        code: 'pl'
    }
];

export default (props) => (
    <Suspense fallback="loading">
        <Language {...props} />
    </Suspense>
)

function Language(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = React.useState(i18n.language);

    function handleClickListItem(event) {
        setAnchorEl(event.currentTarget);
    }

    const getCurrent = (code) => {
        return options.find(x => x.code === selectedLanguage);
    }

    function handleMenuItemClick(event, index) {
        const selected = options[index];
        i18n.changeLanguage(selected.code);
        setSelectedLanguage(selected.code);
        setAnchorEl(null);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="Language settings">
                <ListItem
                    button
                    aria-haspopup="true"
                    onClick={handleClickListItem}
                >
                    <img src={getCurrent(i18n.language).icon} alt={getCurrent(i18n.language).text} className={classes.flag} />
                </ListItem>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option.code}
                        onClick={event => handleMenuItemClick(event, index)}
                    >
                        <img src={option.icon} alt={option.text} className={classes.flag} />
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}