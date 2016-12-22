import React from 'react';

const AccountPage = (props) => {
    return(
      <div>
         <form action="" onSubmit={props.updateData} className="readonly editForm">
          <div className="editForm--item">
            <label className="column column__3-of-12">First Name: </label>
            <input className="column column__9-of-12" name="FirstName" type="text" defaultValue={props.user.profile.firstname} placeholder="First Name" readOnly />
          </div>
          <div className="editForm--item">
             <label className="column column__3-of-12">Surname: </label>
            <input className="column column__9-of-12" name="surname" type="text" defaultValue={props.user.profile.surname} placeholder="Surname" readOnly />
          </div>
          <div className="editForm--item">
            <label className="column column__3-of-12">Email: </label>
            <input className="column column__9-of-12" name="email" type="email" defaultValue={props.user.profile.email} placeholder="Email" readOnly />
          </div>
            <input type="submit" />
            <a href="#" className="edit" onClick={props.handleClick}>Edit form</a>
        </form>
      </div>
    );
}

export {AccountPage};
