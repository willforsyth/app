import React from 'react';

const AccountPage = (props) => {
  console.log(Meteor.userId())
  console.log(props)

    return(
      <div>
        <form action="" onSubmit={props.updateData} className="readonly editForm">
          <h2>Hi {props.user.username}</h2>
          <label>First Name: </label>
          <input name="FirstName" type="text" defaultValue={props.user.profile.firstName} readOnly />
           <label>Last Name: </label>
          <input type="text" defaultValue={props.user.profile.surname} readOnly />
              <label>Email: </label>
          <input type="email" defaultValue={props.user.profile.email} readOnly />
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
