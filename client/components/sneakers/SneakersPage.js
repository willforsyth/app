import React from 'react';

const SneakersPage = () => {
    return(
      <div>
        <h1>Sneaker page</h1>
        <p>Some about shit</p>
      </div>
    );

}

export {SneakersPage};



// renderUserList() {
//   return this.props.users.map((user) => (
//     <AccountPage key={user._id} user={user} handleClick={this.handleClick.bind(this)} updateData={this.updateData.bind(this)} />
//   ));
// }
//
// return(
//   <div>
//     {this.renderUserList()}
//   </div>
// )
//
//
// export default createContainer(() => {
//   return {
//     users: Meteor.users.find({}).fetch(),
//   };
// }, AccountCont);
