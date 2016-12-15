import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Header} from './header';
import {AccountLink} from './accountLink';

class HeaderContainer extends Component {
  render(){
    let userName = Meteor.users.find({_id:Meteor.userId()}).fetch();
    if( Meteor.user() ){
      return (
          <div>
              <Header />
              <AccountLink />
            </div>
          );
    }
    else {
      return(
        <div className="something">
          <Header />
        </div>
      )
    }

  }
}

export {HeaderContainer};
