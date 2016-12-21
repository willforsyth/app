import React from 'react';

const HomePage = (props) => {
  console.log(props.user.item)
  return(
      <section className="column column__center column__8-of-12">
        <h2>{props.user.item.title}</h2>
        <p>{props.user.item.category}</p>
      </section>
  )
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
