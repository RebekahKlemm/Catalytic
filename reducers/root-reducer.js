import React from 'react';
import { combineReducers } from 'redux'
import processes from './process-reducer';
import steps from './step-reducer';
import users from './user-reducer';



export default combineReducers({processes, steps, users});