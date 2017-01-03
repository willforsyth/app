import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ItemsPage from './ItemsPage';
import { createContainer } from 'meteor/react-meteor-data';
import { Tracker } from 'meteor/tracker';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

// App component - represents the whole app
class ItemsContainer extends TrackerReact(React.Component) {

  // this is not being used/////
  constructor(props) {
      super(props);
      this.state = {
        subscription: {
          item: Meteor.subscribe('sneakers')
        }
      }
  }

  componentWillUnmount() {
      this.state.subscription.item.stop();
  }
  //// this is not being used/////
  //// {"item.title": this.props.params.id}

  item() {
      return sneakers.find({"user": Meteor.userId()}).fetch();
  }

  renderItemsList() {
    return this.item().map((sneaker) => (
      <ItemsPage key={sneaker._id} sneaker={sneaker} />
    ));
  }

  render(){
    console.log(sneakers.find({"user": Meteor.userId()}).fetch());
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
