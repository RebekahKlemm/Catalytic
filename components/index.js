import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {App} from './App';
import {Provider} from 'react-redux';
import store from '../store';
import axios from 'axios';

const onAppEnter = function () {
    Promise.all([
        axios.get('/data/process'),
        axios.get('/data/steps'),
        axios.get('/data/users')
    ])
        .then(responses => responses.map(r => r.data))
        .then(([processes, steps, users]) => {
            // store.dispatch(receiveProcesses(processes));
            // store.dispatch(receiveSteps(steps));
            // store.dispatch(receiveUsers(users));
        })

};


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App} onEnter={onAppEnter}>
                {/*<IndexRoute component={}/>*/}
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

