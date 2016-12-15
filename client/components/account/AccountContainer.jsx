import React, { Component, PropTypes } from 'react';
import {AccountPage} from './AccountPage';
import { createContainer } from 'meteor/react-meteor-data';
import { AccountList } from '../../../api/dataContainer';
import {HomePage} from './../home/HomePage';


// App component - represents the whole app
class AccountCont extends Component {
  renderUserList() {
    return this.props.users.map((user) => (
      <AccountPage key={user._id} user={user} />
    ));
  }

  render(){
      // let userName = Meteor.users.find({_id:Meteor.userId()}).fetch();
      // let currentUserId = Meteor.userId();
      // console.log(currentUserId + " " + "s");
      // var get = event.target;
  		// var firstName = get.firstName.value;
  		// var surname = get.surname.value;
  		// var team = get.team.value;
  		// var role = get.role.value;
  		// var department = get.department.value;

  		// Update the user collection with the form data.
  		// Meteor.call('updateProfile', firstName, surname, team, role, item, notification);

      return(
          <div className="cont">
            {this.renderUserList()}
          </div>
      );
    }
}

export default createContainer(() => {
  return {
    users: AccountList.find({}).fetch(),
  };
}, AccountCont);
