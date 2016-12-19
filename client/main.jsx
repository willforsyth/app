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
Meteor.subscribe('userData');

Meteor.startup(() => {
  render(<Router history={browserHistory} routes={routes}/>, document.getElementById('render-target'));
});


Template.body.events({
	'submit .new-profile': function(event) {
    let get = event.target,
        firstname = get.FirstName.value,
        surname = get.surname.value,
        email = get.email.value
		// Update the user collection with the form data.

		Meteor.call('updateProfile', firstname, surname, email);

		// Stop the page from refreshing.
		event.preventDefault();

		// Return false to stop the page from refreshing.
		return false;

	//Don't forget this comma!
	}
});
