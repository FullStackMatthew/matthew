import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import Navbar from '../../components/navbar/Navbar';

export default (props) => (
    <Navbar
        title={props.title}
        showBrand={props.showBrand}
        showMenu={props.showMenu}
        opened={props.opened}
        menu={props.menu} >

        <Switch>
            {
                props.menu.map((menuItem, index) => (
                    menuItem.items.map(route => (
                        route.component ?
                            <Route path={route.path} component={route.component} /> : null
                    ))
                ))
            }
        </Switch>
    </Navbar>
)