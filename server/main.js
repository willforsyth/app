import { Meteor } from 'meteor/meteor';

import '../api/dataContainer';

sneakers = new Mongo.Collection('sneakers');

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
    sneakers.insert({
        "user": Meteor.userId(),
        "title": make,
        "description": description,
        "category": size,
        "thumbnail": thumbnail
    });
  },


});

Accounts.onCreateUser(function(options, user) {
  // We're enforcing at least an empty profile object to avoid needing to check
  // for its existence later.
  user.profile = options.profile ? options.profile : {
    "firstname": '',
    "surname": '',
    "email": ''
  }
  // items = options.item ? options.item : {
  //   "item": ''
  // };
  // user.items = options.item ? options.item : {
  //   "title": '',
  //   "description": '',
  //   "category": ''
  // };
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

Meteor.publish('sneakers', function() {
	return sneakers.find();
});

Slingshot.fileRestrictions("myFileUploads", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited).
});

Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
  AWSAccessKeyId: "AKIAJOZGKFZ5NOFODCIA",
  AWSSecretAccessKey: "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",
  bucket: "rarre",
  acl: "public-read",
  region: "eu-west-2",

  authorize: function () {
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },

  key: function (file) {
    //Store file into a directory by the user's username.
    var user = Meteor.users.findOne(this.userId);
    return user.username + "/" + file.name;
  }
});


// Meteor.publish('usersItems', function(){
//     return users.find();
// });
