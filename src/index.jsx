import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import {createStore} from 'redux';
import reducer from './reducer'
import {Provider} from 'react-redux';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Voting';


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
    <Route path="/results" component={ResultsContainer} />
    <Route path="/" component={VotingContainer} />  
</Route>;

ReactDOM.render(
    //<Voting pair={pair}  />,
    //<Voting pair={pair} hasVoted="book" />,
    //<Voting pair={pair} winner="apple" />,
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);