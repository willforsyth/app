import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Session } from 'meteor/session';
import routes from './Routes';
import {App} from './App.jsx';
import './main.html';
import './components/account/accounts-config.js';

// Create a session for the user.
Session.set('userSession', Meteor.userId());


// Meteor.subscribe('userData');

Meteor.startup(() => {
  render(<Router history={browserHistory} routes={routes}/>, document.getElementById('render-target'));
});


Tracker.autorun(function(){
  Meteor.subscribe('userData');
  Meteor.subscribe('allUsersItems');
});


Template.body.events({
  	'submit .new-profile': function(event) {
      let get = event.target,
          firstname = get.FirstName.value,
          surname = get.surname.value,
          email = get.email.value

  		Meteor.call('updateProfile', firstname, surname, email);

  		event.preventDefault();
  		return false;

  },
  'submit .new-item': function(event) {
    // Update the user collection with the form data.
    let get = event.target,
        make = get.root_sneakers_make.value,
        description = get.root_sneakers_description.value,
        size = get.root_sneakers_size.value;
        thumbnail = get.root_sneakers_thumbnail.value;

    console.log(make + description + size + thumbnail);

    Meteor.call('addSneaker', make, description, size, thumbnail);

    event.preventDefault();
    return false;

  },

});
