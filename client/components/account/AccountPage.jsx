import React from 'react';

const AccountPage = (props) => {
  console.log(Meteor.userId())
  console.log(props)

    // hideForm() {
    //   $('.edit').on('click', function() {
    //     $('[readonly]').attr('readonly', false);
    //     $('.readonly').removeClass('readonly')
    //   });
    // }

    return(
      <div>
        <form action="" className="readonly editForm">
          <label>First Name: </label>
          <input type="text" value={props.user.FirstName} readOnly />
           <label>Last Name: </label>
          <input type="text" value={props.user.secondName} readOnly />
              <label>Email: </label>
          <input type="email" value={props.user.email} readOnly />
              <label>Website: </label>
          <input type="text" value="willforsyth.io" readOnly />
            <input type="submit" />
            <a href="#" className="edit">Edit form</a>
        </form>
        <h1>{props.user.firstName}</h1>
        <p>{props.user._id}</p>
      </div>
    );
}

export {AccountPage};
