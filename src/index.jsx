import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import Results from './components/Results';


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