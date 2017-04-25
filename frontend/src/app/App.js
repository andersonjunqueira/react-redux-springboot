import React, { PropTypes } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import Intl from '../components/Intl';
import Full from '../containers/Full';
import Simple from '../containers/Simple';

import Login from '../modules/Login';
import Profile from '../modules/Profile';

import Showcase from '../modules/Showcase';

const App = ({store}) => (
    <Provider store={store}>

        <Router history={browserHistory}>

            <Route component={Full} path="/" name={<Intl str='inicio'></Intl>}>
                <IndexRoute component={Showcase} />
                <Route path="/profile" name={<Intl str='meu-perfil'></Intl>} component={Profile} />
            </Route>

            <Route component={Simple} path="/login" name="/">
                <IndexRoute component={Login} />
            </Route>

        </Router>

    </Provider>
);


App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default App;
