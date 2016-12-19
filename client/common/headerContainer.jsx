import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Header} from './header';

class HeaderContainer extends Component {
  render(){
    let userName = Meteor.users.find({_id:Meteor.userId()}).fetch();
    if( Meteor.user() ){
      return (
          <div>
              <Header />
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
