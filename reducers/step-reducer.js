import React from 'react'

//set initial state in the redux store
const initialState = {
    allSteps:[]
}

//utilize a constant in order to avoid typos
const RECEIVE_STEPS = 'RECEIVE_STEPS';

//action to retrieve all steps and put them in the store; runs on App enter
export const receiveSteps = function (steps) {
    return {
        type: RECEIVE_STEPS,
        allSteps: steps
    };
};

//reducer to update store with data from action(s)
export default function (state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_STEPS:
            newState.allSteps = [...newState.allSteps, ...action.allSteps];
            break;
        default:
            return state;
    }
    return newState;
}