import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Header} from './header';
import {AccountLink} from './accountLink';

class HeaderContainer extends Component {

  /// here we go again no data initially so no links

  render(){
    let userName = Meteor.users.find({_id:Meteor.userId()}).fetch();
    if( Meteor.userId() ){
      console.log('he' + Meteor.user())
      return (
          <div className="wrapper">
              <Header />
              <AccountLink />
            </div>
          );
    }
    else {
      console.log('logged out')
      return(
        <div className="wrapper">
          <Header />
        </div>
      )
    }

  }
}

export {HeaderContainer};
