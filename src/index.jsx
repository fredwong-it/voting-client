import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import Results from './components/Results';
import {createStore} from 'redux';
import reducer from './reducer'


const store = createStore(reducer);
store.dispatch({
    type: 'SET_STATE',
    state: {
        pair: ['book', 'apple'],
        tally: {
            'book': 3
        }
    }
});

const routes = <Route component={App}>
    <Route path="/results" component={Results} />
    <Route path="/" component={Voting} />  
</Route>;

ReactDOM.render(
    //<Voting pair={pair}  />,
    //<Voting pair={pair} hasVoted="book" />,
    //<Voting pair={pair} winner="apple" />,
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('app')
);