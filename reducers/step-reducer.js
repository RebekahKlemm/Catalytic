import React from 'react'

const RECEIVE_STEPS = 'RECEIVE_STEPS';

const initialState = {
    displayName: "",
    description: "",
    assignedUsers: []
}


export default function (state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_STEPS:
            newState.displayName = action.displayName;
            newState.description = action.description;
            newState.assignedUsers = [...action.assignedUsers];
            break;
        default:
            return state;
    }
    return newState;
}