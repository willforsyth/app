 import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ItemsPage from './ItemsPage';
import { createContainer } from 'meteor/react-meteor-data';
import { Tracker } from 'meteor/tracker';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

// App component - represents the whole app
class ItemsContainer extends TrackerReact(React.Component) {

    constructor() {
        super();
        this.state = {
          subscription: {
            item: Meteor.subscribe('userData')
          }
        }
    }

    componentWillUnmount() {
        this.state.subscription.item.stop();
    }

    item() {
        return Meteor.users.find({_id:Meteor.userId()}).fetch();
    }

    renderItemsList() {
      return this.item().map((user) => (
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

export default ItemsContainer;


// let user = Meteor.users.find({_id:Meteor.userId()}).fetch();
// let userFirst = user[0];
//
// console.log(userFirst)
