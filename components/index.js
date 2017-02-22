import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {App} from './App';
import Sidebar from './Sidebar';
import {Provider} from 'react-redux';
import store from '../store';
import axios from 'axios';
import {receiveProcesses} from '../reducers/process-reducer'
import {receiveSteps} from '../reducers/step-reducer'
import {receiveUsers} from '../reducers/user-reducer'

const onAppEnter = function () {
    Promise.all([
        axios.get('/data/process.json'),
        axios.get('/data/steps.json'),
        axios.get('/data/users.json')
    ])
        .then(responses => responses.map(r => r.data))
        .then(([processes, steps, users]) => {
            store.dispatch(receiveProcesses(processes));
            store.dispatch(receiveSteps(steps));
            store.dispatch(receiveUsers(users));
        })

};


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App} onEnter={onAppEnter}>
                <IndexRoute component={Sidebar}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

