import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SellPage from './SellPage';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class SellContainer extends Component {

  renderItemsList() {
    return this.props.users.map((user) => (
      <SellPage key={user._id} user={user} />
    ));
  }

  render(){
    return(
      <div className="cont">
        {this.renderItemsList()}
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    users: Meteor.users.find({}).fetch(),
  };
}, SellContainer);
