import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ItemsPage from './ItemsPage';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class ItemsContainer extends Component {

  renderItemsList() {
    return this.props.users.map((user) => (
      <ItemsPage key={user._id} user={user} />
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
}, ItemsContainer);
