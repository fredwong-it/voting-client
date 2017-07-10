import React from 'react';
import Winner from './Winner';
import Vote from './Vote';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

// dumbm pure component
// The pure/dumb component is fully driven by the props it is given. It is the component equivalent of a pure function.
export const Voting =  React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return <div>
            {this.props.winner ? 
                <Winner ref="winner" winner={this.props.winner} /> :
                <Vote {...this.props} />}
        </div>;
  }
});

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        winner: state.get('winner');
    };
}

// connect only returns a connected version of Voting
// smart, connected component
// The connected/smart component, on the other hand, wraps the pure version with some logic that will keep it in sync with the changing state of the Redux Store. That logic is provided by react-redux.
export const VotingContainer = connect(mapStateToProps)(Voting);