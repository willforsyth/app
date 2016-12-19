import React from 'react';

const AccountPage = (props) => {
  console.log(Meteor.userId())
  // console.log(state.username)

    return(
      <div>
        <form action="" onSubmit={props.updateData} className="readonly editForm">
          <label>First Name: </label>
          <input name="FirstName" type="text" defaultValue={props.user.profile.firstname} readOnly />
           <label>Last Name: </label>
          <input name="surname" type="text" defaultValue={props.user.profile.surname} readOnly />
              <label>Email: </label>
          <input name="email" type="email" defaultValue={props.user.profile.email} readOnly />
            <input type="submit" />
            <a href="#" className="edit" onClick={props.handleClick}>Edit form</a>
        </form>
      </div>
    );
}

export {AccountPage};
