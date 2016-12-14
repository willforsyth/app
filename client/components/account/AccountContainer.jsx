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
