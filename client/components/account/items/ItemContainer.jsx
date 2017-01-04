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
        data: sneakers.find({"title": this.props.params.id}).fetch(),
        subscription: {
          item: Meteor.subscribe('sneakers')
        }
      }
  }
  // this needs to work similar to the home page


  item() {
      return sneakers.find({"title": this.props.params.id}).fetch();
  }

  renderItemsList() {
      return this.item().map((user) => (
          <ItemPage key={user._id} user={user} />
      ));
  }

  render(){
      console.log(this.item());
      return (
        <div className="cont">
            {this.renderItemsList()}
        </div>

      )
    }
}

export default ItemContainer;
