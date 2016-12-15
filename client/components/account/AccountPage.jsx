import React from 'react';

const AccountPage = (props) => {
  console.log(Meteor.userId())
  console.log(props)
    return(
      <div>
        <h1>{props.user.firstName}</h1>
        <p>{props.user._id}</p>
      </div>
    );
}

export {AccountPage};
