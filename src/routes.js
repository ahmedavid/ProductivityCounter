import React from 'react';
import {Route,IndexRoute} from 'react-router';

import App from './components/App';
import Home from './containers/Home';
import Profile from './containers/Profile';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/profile' component={Profile}/>
    </Route>
);