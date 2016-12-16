import { Meteor } from 'meteor/meteor';

import '../api/dataContainer';

Meteor.startup(() => {
  // code to run on server at startup
});



Meteor.methods({
  // Normal - Update the current user's profile.
  updateProfile: function(firstName){
    if(! Meteor.userId()){
      throw new Meteor.Error('Access denied.');
    }

    Meteor.users.update({_id:Meteor.userId()}, {$set: {
      "profile.firstName": firstName
    }});
  },
})
