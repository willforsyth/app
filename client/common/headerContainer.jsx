import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Header} from './header';
import {AccountLink} from './accountLink';

class HeaderContainer extends Component {

  constructor() {
      super();
      const subscription = Meteor.subscribe('userData');
      this.state = {
        ready: subscription.ready(),
        handle: Meteor.subscribe('userData'),
        subscription: subscription,
        user: []
      }
  }

  componentDidMount() {
   Tracker.autorun(() => {
     const isReady = this.state.ready;
     if (this.state.handle.ready()){
       var user = Meteor.users.find({_id:Meteor.userId()}).fetch();
       this.setState({
          user: user
      })
     }else{
       console.log("Its not ready did not mount");
     }
   });
 }

  /// here we go again no data initially so no links

  renderItemsList() {
      return this.state.user.map((header) => (
        <AccountLink key={header._id}/>
      ));
  }

  render(){
    console.log(this.state.user[0])
      return(
        <div>
           <div className="nav--account--cont">
                {this.renderItemsList()}
            </div>
          <div className="wrapper">
            <Header />
          </div>
        </div>
      )
    }
}

export {HeaderContainer};
