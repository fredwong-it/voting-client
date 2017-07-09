import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['book', 'apple'];

ReactDOM.render(
    //<Voting pair={pair}  />,
    <Voting pair={pair} hasVoted="book" />,
    //<Voting pair={pair} winner="apple" />,
    document.getElementById('app')
);