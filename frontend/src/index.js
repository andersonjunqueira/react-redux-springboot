import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Keycloak from "keycloak-js";
import axios from "axios";

import App from './app/App';
import { login } from './app/App.actions';
import reducers from './app/App.reducers';

import { changeLanguage } from './components/Intl/Intl.actions';

import appData from './app.json';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

const DEFAULT_LANGUAGE = "br";

// INTERNACIONALIZAÇÃO
store.dispatch(changeLanguage(DEFAULT_LANGUAGE, true));

if(true) { // EXECUTAR A CONFIGURAÇÃO COM KEYCLOAK

    // KEYCLOAK CONFIG
    let kc = Keycloak(appData.config.keycloakConfigFile);
    kc.init({onLoad: 'check-sso'}).success(authenticated => {
        if (authenticated) {
            store.dispatch(login(kc, DEFAULT_LANGUAGE));
            ReactDOM.render(<App store={store}/>, document.getElementById('root'));
        } else {
            kc.login();
        }
    });

    // AXIOS CONFIG
    axios.defaults.baseURL = appData.config.axiosBaseURL;
    axios.interceptors.request.use(config => {
        if(kc.isTokenExpired()) {
            kc.updateToken(1000*60*25).error(() => kc.logout());
        }

        config.headers = {...config.headers, ...{
            Accept: 'application/json',
            Authorization: 'Bearer ' + kc.token
        }};
        return config;
    });

} else { // EXECUTAR A CONFIGURAÇÃO SEM O KEYLOAK

    // AXIOS CONFIG 
    axios.defaults.baseURL = appData.config.axiosBaseURL;

    ReactDOM.render(<App store={store}/>, document.getElementById('root'));

}
