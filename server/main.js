import { Meteor } from 'meteor/meteor';

import '../api/dataContainer';

Meteor.startup(() => {

});



Meteor.methods({
  // Normal - Update the current user's profile.
  updateProfile: function(firstname, surname, email){
    if(! Meteor.userId()){
      throw new Meteor.Error('Access denied.');
    }

    Meteor.users.update({_id:Meteor.userId()}, {$set: {
      "profile.firstname": firstname,
      "profile.surname": surname,
      "profile.email": email
    }});
  },
})

Accounts.onCreateUser(function(options, user) {
  // We're enforcing at least an empty profile object to avoid needing to check
  // for its existence later.
  user.profile = options.profile ? options.profile : {
    "firstname": '',
    "surname": '',
    "email": ''
  };
  return user;
})
