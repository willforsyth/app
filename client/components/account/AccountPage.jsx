import React from 'react';

const AccountPage = (props) => {
  console.log(Meteor.userId())
  // console.log(state.username)

    return(
      <div>
        <form action="" onSubmit={props.updateData} className="readonly editForm grid">
          <div className="editForm--item">
            <label className="column column__3-of-12">First Name: </label>
            <input className="column column__9-of-12" name="FirstName" type="text" defaultValue={props.user.profile.firstname} readOnly />
          </div>
          <div className="editForm--item">
             <label className="column column__3-of-12">Last Name: </label>
            <input className="column column__9-of-12" name="surname" type="text" defaultValue={props.user.profile.surname} readOnly />
          </div>
          <div className="editForm--item">
            <label className="column column__3-of-12">Email: </label>
            <input className="column column__9-of-12" name="email" type="email" defaultValue={props.user.profile.email} readOnly />
          </div>
            <input type="submit" />
            <a href="#" className="edit button--alt" onClick={props.handleClick}>Edit form</a>
        </form>
      </div>
    );
}

export {AccountPage};
