import React, { Component, PropTypes } from 'react';
import {AccountPage} from './AccountPage';
import { createContainer } from 'meteor/react-meteor-data';
import { UserList } from '../../../api/dataContainer';


// App component - represents the whole app
class AccountCont extends Component {
  renderUserList() {
    return this.props.users.map((name) => (
      <AccountPage key={name._id} name={name} />
    ));
  }
  render(){
      let newUsers = this.renderUserList();
      console.log(newUsers);
      return(
          <div className="cont">
            {this.renderUserList()}
          </div>
      );
    }
}

export default createContainer(() => {
  return {
    users: UserList.find({}).fetch(),
  };
}, AccountCont);

// class AccountCont extends React.Component {
//   constructor(props, context){
//     super(props, context);
//
//     this.state = {
//       course: {title: ""}
//     };
//   }
//
//   getUsers() {
// 		return UserList.find({ name: "David" }).fetch();
// 	}
//
//   // let users = UserList.find().fetch();
//   // console.log(users.id);
//
//   render(){
//     let users = this.getUsers();
//     return(
//         <AccountPage name='William' />
//     );
//   }
// }
//
//
// export {AccountCont};
