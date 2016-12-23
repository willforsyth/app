import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {AccountPage} from './AccountPage';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class AccountCont extends Component {

  // this is not being used/////
  constructor() {
      super();
      this.state = {
        subscription: {
          user: Meteor.subscribe('userData')
        }
      }
  }

  componentWillUnmount() {
      this.state.subscription.user.stop();
  }
  // this is not being used/////

  item() {
      return Meteor.users.find({_id:Meteor.userId()}).fetch();
  }

  renderItemsList() {
    return this.item().map((user) => (
      <AccountPage key={user._id} user={user} handleClick={this.handleClick.bind(this)} updateData={this.updateData.bind(this)} />
    ));
  }

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


  render(){
      return(
        <div>
          <div className="cont">
            {this.renderItemsList()}
          </div>
        </div>
      );
    }
}

// export default AccountCont;

export default AccountCont;
