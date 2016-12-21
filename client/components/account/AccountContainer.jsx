import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {AccountPage} from './AccountPage';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class AccountCont extends Component {

  // constructor() {
  //   super();
  //   const subscription = Meteor.subscribe('allUsersItems', this.props.postId);
  //   this.state = {
  //     ready: subscription.ready(),
  //     subscription: subscription
  //   }
  // }
  //
  // componentWillUnmount() {
  //    this.state.subscription.stop();
  //  }

  handleClick(e) {
      e.preventDefault();
      let edit = document.querySelector('.edit'),
          input = document.querySelectorAll('input'),
          readOnly = document.querySelector('.readonly');
      input.forEach(inputs => inputs.readOnly = false);
      input.forEach(inputs => inputs.removeAttribute('readOnly'));
      readOnly.classList.remove('readonly');
    }

  updateData(event){
    event.preventDefault()
    let get = event.target;
        firstName = get.FirstName.value,
        surname = get.surname.value,
        email = get.email.value;
        edit = document.querySelector('.edit'),
        input = document.querySelectorAll('input'),
        readOnly = document.querySelector('.editForm');
    input.forEach(inputs => inputs.readOnly = true);
    readOnly.classList.add('readonly');
    Meteor.call('updateProfile', firstName, surname, email);
  }

  // renderUserList() {
  //   return this.props.users.map((user) => (
  //     <AccountPage key={user._id} user={user} handleClick={this.handleClick.bind(this)} updateData={this.updateData.bind(this)} />
  //   ));
  // }

  render(){
      // console.log(this.userId);
      let user = Meteor.users.find({_id:Meteor.userId()}).fetch();
      let userFirst = user[0];

      return(
          <div className="cont">
            <AccountPage user={userFirst} handleClick={this.handleClick.bind(this)} updateData={this.updateData.bind(this)} />
          </div>
      );
    }
}

// export default AccountCont;

export default createContainer(() => {
  return {
    users: Meteor.users.find({}).fetch(),
  };
},AccountCont);
