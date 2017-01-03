import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ItemPage from './itemPage';
import { createContainer } from 'meteor/react-meteor-data';
import { Tracker } from 'meteor/tracker';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class ItemContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
        data: Meteor.users.find().fetch(),
        subscription: {
          item: Meteor.subscribe('sneakers')
        }
      }
  }

  componentWillUnmount() {
      this.state.subscription.item.stop();
  }

  item() {
      return Meteor.users.find({"item.title": this.props.params.id}).fetch();
  }

  renderItemsList() {
      return this.item().map((user) => (
          <ItemPage key={user._id} user={user} />
      ));
  }

  render(){
      return (
        <div className="cont">
            {this.renderItemsList()}
        </div>

      )
    }
}

export default ItemContainer;
