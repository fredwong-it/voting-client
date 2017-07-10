import {Map} from 'immutable';

/*
    we are not bothering with a "core" module separated from the reducer module. 
    That's because the logic in our reducer is so simple that it doesn't really warrant one. 
    We're just doing a merge, whereas on the server we have our whole voting system's logic in there.
 */

function setState(state, newState) {
    // it can merge with the JS object
    // If any of the values provided to merge are not Collection (would return false for isCollection) then they are deeply converted via fromJS before being merged. 
    return state.merge(newState);
}

export default function (state = Map(), action) {

    switch(action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
    }

    return state;
}