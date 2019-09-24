import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './i18n';

// import * as serviceWorker from './serviceWorker';

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import dark from './assets-global/Theme';

//components
import Login from './login/Login';
import Landpage from './landpage/Landpage';

import ConfigurationMenu from './modules/configurations/ConfigurationMenu';
import OperationMenu from './modules/operation/OperationMenu';

const link = createHttpLink({ uri: "http://development-app.newtrax.com/api/v1/graphql" });
const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={dark} >
            <ApolloProvider client={client}>
                <CssBaseline />
                <div className="main">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/home" component={Landpage} />
                        <Route path="/configuration" component={ConfigurationMenu} />
                        <Route path="/operation" component={OperationMenu} />

                        {/* <PrivateRoute path="/home" component={Landpage} /> */}
                    </Switch>
                </div>
            </ApolloProvider>
        </ThemeProvider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
