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

sneakers = new Mongo.Collection('sneakers');

Meteor.startup(() => {
  render(<Router history={browserHistory} routes={routes}/>, document.getElementById('render-target'));
});


const handle = Meteor.subscribe('sneakers');
Tracker.autorun(() => {
  const isReady = handle.ready();
  if (isReady){
    console.log("Its ready" + sneakers.find().fetch());
    sneakers.find().fetch()
  }else{
    console.log("Its not ready" + sneakers.find().fetch());
  }
});


Meteor.subscribe('userData');
Meteor.subscribe('allUsersItems');
Meteor.subscribe('sneakers');

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

    let uploader = new Slingshot.Upload("myFileUploads");

    uploader.send(document.getElementById('root_sneakers_thumbnail').files[0], function (error, downloadUrl) {
      if (error) {
        // Log service detailed response.
        console.error('Error uploading', uploader.xhr.response);
        alert (error);
      }
      else {
        Meteor.users.update(Meteor.userId(), {$push: {"profile.images": downloadUrl}});
      }
    });

    event.preventDefault();
    return false;
  },

});

// Meteor.users.allow({
//   insert: function (userId, doc) {
//          return true;
//   }
// });

sneakers.allow({
  update: function (userId, doc, fieldNames, modifier, user) {
         //similar checks like insert
         return true;
  }
});

// Meteor.users.allow({
//     remove: function (userId, doc) {
//            return true;
//    }
// });


Slingshot.fileRestrictions("myFileUploads", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited).
});
