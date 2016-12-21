import React from 'react';

class HomePage extends React.Component {
  render(){
    return(
      <div className="container-fluid">
        <h1>Hello</h1>
      </div>
    );
  }
}

export {HomePage};


// renderUserList() {
//   console.log(this.props.users);
//   return this.props.users.map((user) => (
//     <AccountPage key={user._id} user={user} handleClick={this.handleClick.bind(this)} updateData={this.updateData.bind(this)} />
//   ));
// }
//
// render(){
//     return(
//         <div className="cont">
//           {this.renderUserList()}
//         </div>
//     );
//   }

// export default createContainer(() => {
//   return {
//     users: Meteor.users.find().fetch(),
//   };
// }, AccountCont);
