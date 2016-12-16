import React from 'react';

const AccountPage = (props) => {
  console.log(Meteor.userId())
  console.log(props)

  // updateData = (e) => {
  //   e.preventDafault()
  //   console.log('submit');
  //   let currentUserId = Meteor.userId();
  //   var get = event.target;
	// 	var firstName = get.FirstName.value;
	// 	var surname = get.secondName.value;
  //
	// 	// Update the user collection with the form data.
	// 	// Meteor.call('updateProfile', firstName, surname, team, role, item, notification);
  // }


    return(
      <div>
        <form action="" onSubmit={props.updateData} className="readonly editForm">
          <label>First Name: </label>
          <input name="FirstName" type="text" defaultValue={props.user.FirstName} readOnly />
           <label>Last Name: </label>
          <input type="text" defaultValue={props.user.secondName} readOnly />
              <label>Email: </label>
          <input type="email" defaultValue={props.user.email} readOnly />
              <label>Website: </label>
          <input type="text" defaultValue="willforsyth.io" readOnly />
            <input type="submit" />
            <a href="#" className="edit" onClick={props.handleClick}>Edit form</a>
        </form>
        <h1>{props.user.firstName}</h1>
        <p>{props.user._id}</p>
      </div>
    );
}

export {AccountPage};
