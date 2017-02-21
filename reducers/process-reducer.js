import React from 'react'

const RECEIVE_PROCESSES = 'RECEIVE_PROCESSES';

const initialState = {
    displayName: "",
    description: ""
}


export default function (state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_PROCESSES:
            newState.displayName = action.displayName;
            newState.description = action.description;
            break;
        default:
            return state;
    }
    return newState;
}
