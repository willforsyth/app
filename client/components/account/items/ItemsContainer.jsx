import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ItemsPage from './ItemsPage';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class ItemsContainer extends Component {

  render(){
    let user = Meteor.users.find({_id:Meteor.userId()}).fetch();
    let userFirst = user[0];
    console.log(userFirst)
    return(
      <div className="cont">
        <ItemsPage user={userFirst} />
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    users: Meteor.users.find({}).fetch(),
  };
}, ItemsContainer);
