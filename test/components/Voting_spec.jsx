import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-addons-test-utils';
import Voting from '../../src/components/Voting';
import {expect} from 'chai';
import {List} from 'immutable';

describe('Voting', () => {
    it('renders a pair of buttons', () => {
        const component = renderIntoDocument(
            <Voting pair={['book', 'apple']} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].textContent).to.equal('book');
        expect(buttons[1].textContent).to.equal('apple');
    });

    it('invokes callback when a button is clicked', () => {
        let voteWith;
        const vote = (entry) => voteWith = entry;

        const component = renderIntoDocument(
            <Voting pair={['book', 'apple']} 
                    vote={vote}/>
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[0]);

        expect(voteWith).to.equal('book');
    });

    it('disabled buttons when user has voted', () => {
        const component = renderIntoDocument(
            <Voting pair={['book', 'apple']} hasVoted="book" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].hasAttribute('disabled')).to.equal(true);
        expect(buttons[1].hasAttribute('disabled')).to.equal(true);
    });

    it('adds label to the voted entry', () => {
        const component = renderIntoDocument(
            <Voting pair={['book', 'apple']} hasVoted="apple" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons[1].textContent).to.contain('Voted');
    });

    it('render just the winner if there is one', () => {
        const component = renderIntoDocument(
            <Voting winner="apple" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons.length).to.equal(0);

        const winner = ReactDOM.findDOMNode(component.refs.winner);
        expect(winner).to.be.ok;
        expect(winner.textContent).to.contain('apple');
    });

    it('renders as a pure component', () => {
        const pair = ['book', 'apple'];
        const container = document.createElement('div');
        let component = ReactDOM.render(
            <Voting pair={pair} />,
            container
        );

        let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('book');

        pair[0] = 'hero';
        component = ReactDOM.render(
            <Voting pair={pair} />,
            container
        );

        firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('book');
    });

    it('does update DOM when prop changes', () => {
        const pair = List.of('book', 'apple');
        const container = document.createElement('div');
        let component = ReactDOM.render(
            <Voting pair={pair} />,
            container
        );

        let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('book');

        const newPair = pair.set(0, 'hero')
        component = ReactDOM.render(
            <Voting pair={pair} />,
            container
        );

        firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('book');
    })
});