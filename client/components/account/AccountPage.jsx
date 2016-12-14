import React from 'react';

const AccountPage = (props) => {
  console.log(props)
    return(
      <div>
        <h1>{props.name.name}</h1>
        <p>{props.name._id}</p>
        <p>This is a test</p>
      </div>
    );

}

export {AccountPage};
