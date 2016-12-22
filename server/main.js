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
  addItem: function(firstname, surname, email){
    if(! Meteor.userId()){
      throw new Meteor.Error('Access denied.');
    }

    Meteor.users.update({_id:Meteor.userId()}, {$set: {
      "profile.firstname": firstname,
      "profile.surname": surname,
      "profile.email": email
    }});
  },

  // Update the current user's self assessment form
  addSneaker: function(make, description, size, thumbnail){
    if(! Meteor.userId()){
      throw new Meteor.Error('Access denied.');
    }

    console.log(Meteor.users);

    /// this needs to be insert but wouldnt work needs investigating
    Meteor.users.update({_id: Meteor.userId()}, {$set: {
        "item.title": make,
        "item.description": description,
        "item.category": size,
        "item.thumbnail": thumbnail
    }});

		// SubmittedForms.insert({
		// 	"user_id": Meteor.userId(),
		// 	"submittedDate": new Date(),
		// 	"updateDate": new Date(),
		// 	"state": "live",
		// 	answers
		// });
  }

});

Accounts.onCreateUser(function(options, user) {
  // We're enforcing at least an empty profile object to avoid needing to check
  // for its existence later.
  user.profile = options.profile ? options.profile : {
    "firstname": '',
    "surname": '',
    "email": ''
  },
  user.items = options.item ? options.item : {
    "item": ''
  };
  user.items = options.item ? options.item : {
    "title": '',
    "description": '',
    "category": ''
  };
  return user;
});

Meteor.publish("userData", function() {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId});
  } else {
    this.ready();
  }
});


Meteor.publish('allUsersItems', function() {
  return Meteor.users.find({}, {fields: {'item': 1}});
});


// Meteor.publish('usersItems', function(){
//     return users.find();
// });
