import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
    it('handles SET_STATE', () => {
        const initialState = Map();

        // immutable object is for the state, not for the action
        const action = {
            type: 'SET_STATE',
            state: Map({
                pair: List.of('book', 'apple'),
                tally: Map({ 
                    'book': 3
                })
            })
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            pair: ['book', 'apple'],
            tally: {
                'book': 3
            }
        }));
    });

    it('handles SET_STATE in plain JS payload', () => {
        const initialState = Map();     // state will be the immutable object

        // action is plain JavaScript data structure because it get from the socket
        const action = {
            type: 'SET_STATE',
            state: {
                pair: ['book', 'apple'],
                tally: {
                    'book': 3
                }
            }
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            pair: ['book', 'apple'],
            tally: {
                'book': 3
            }
        }));
    });

    it('handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: {
                pair: ['book', 'apple'],
                tally: {
                    'book': 3
                }
            }
        };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(fromJS({
            pair: ['book', 'apple'],
            tally: {
                'book': 3
            }
        }));
    });

});