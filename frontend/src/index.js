import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
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

// AXIOS CONFIG 
axios.defaults.baseURL = appData.config.axiosBaseURL;

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
