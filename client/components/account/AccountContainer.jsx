import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {AccountPage} from './AccountPage';
import { createContainer } from 'meteor/react-meteor-data';
import { AccountList } from '../../../api/dataContainer';
import {HomePage} from './../home/HomePage';


// App component - represents the whole app
class AccountCont extends Component {

  handleClick(e) {
      e.preventDefault();
      let edit = document.querySelector('.edit');
      let input = document.querySelectorAll('input');
      let readOnly = document.querySelector('.readonly');
      input.forEach(inputs => inputs.readOnly = false);
      input.forEach(inputs => inputs.removeAttribute('readOnly'));
      readOnly.classList.remove('readonly');
      // var firstName = ReactDOM.findDOMNode(this.refs.FirstName).value();
      // var surname = readOnly.refs.secondName;
    }

  updateData(event){
    event.preventDefault()
    let get = event.target;
    let firstName = get.FirstName.value;
    Meteor.call('updateProfile', firstName);
    console.log(get);
  }

  renderUserList() {
    return this.props.users.map((user) => (
      <AccountPage key={user._id} user={user} handleClick={this.handleClick.bind(this)} updateData={this.updateData.bind(this)} />
    ));
  }

  // editForm(){
  //   let edit = document.querySelector('.edit');
  //   console.log(edit);
  // }

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


      return(
          <div className="cont">
            {this.renderUserList()}
          </div>
      );
    }
}

export default createContainer(() => {
  return {
    users: Meteor.users.find({}).fetch(),
  };
}, AccountCont);
