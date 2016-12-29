import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {HomePage} from './HomePage';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

// App component - represents the whole app
class HomeContainer extends TrackerReact(React.Component) {

  // this is not being used/////
  constructor() {
      super();
      this.state = {
        subscription: {
          items: Meteor.subscribe('allUsersItems')
        }
      }
  }

  componentWillUnmount() {
      this.state.subscription.items.stop();
  }
  // this is not being used/////

  item() {
      return Meteor.users.find().fetch();
  }

  renderItemsList() {
      return this.item().map((user) => (
        <HomePage key={user._id} user={user} />
      ));
  }

  render(){
    console.log(this.item().item);
    return(
      <main className="cont grid">
        {this.renderItemsList()}
      </main>
    )
  }
}

export default HomeContainer;
