import React from 'react'

//set initial state in the redux store
const initialState = {
    allProcesses: [],
}

//utilize a constant in order to avoid typos
const RECEIVE_PROCESSES = 'RECEIVE_PROCESSES';
//action to retrieve all processes and put them in the store; runs on App enter
export const receiveProcesses = function (processes) {
    return {
        type: RECEIVE_PROCESSES,
        allProcesses: processes
    };
};

//reducer to update store with data from action(s)
export default function (state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_PROCESSES:
            newState.allProcesses = [...newState.allProcesses, action.allProcesses];
            break;
        default:
            return state;
    }
    return newState;
}


