import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './Routes';
import {App} from './App.jsx';
import './main.html';
import './components/account/accounts-config.js';

// Create a session for the user.

Meteor.startup(() => {
  render(<Router history={browserHistory} routes={routes}/>, document.getElementById('render-target'));
});
