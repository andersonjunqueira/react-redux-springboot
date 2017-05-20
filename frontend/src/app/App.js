import React, { PropTypes } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import Intl from '../components/Intl';
import Full from '../containers/Full';
import SimpleTop from '../containers/SimpleTop';

import Profile from '../modules/Profile';
import Inicio from '../modules/Inicio';

const App = ({store}) => (
    <Provider store={store}>

        <Router history={browserHistory}>

            <Route component={SimpleTop} path="/" name={<Intl str='inicio'></Intl>}>
                <IndexRoute component={Inicio} />
                <Route path="/profile" name={<Intl str='meu-perfil'></Intl>} component={Profile} />
            </Route>

        </Router>

    </Provider>
);


App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default App;
