import React from 'react'

//set initial state in the redux store
const initialState = {
    allUsers:[]
}

//utilize a constant in order to avoid typos
const RECEIVE_USERS = 'RECEIVE_USERS';

//action to retrieve all users and put them in the store; runs on App enter
export const receiveUsers = function (users) {
    return {
        type: RECEIVE_USERS,
        allUsers: users
    };
};

//reducer to update store with data from action(s)
export default function (state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_USERS:
            newState.allUsers = [...newState.allUsers, ...action.allUsers];
            break;
        default:
            return state;
    }
    return newState;
}
