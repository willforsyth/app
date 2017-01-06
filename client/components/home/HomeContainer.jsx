import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {HomePageItem} from './HomePageItem';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Radium from 'radium';

// App component - represents the whole app

@Radium
class HomeContainer extends TrackerReact(React.Component) {

  // this is not being used/////
  constructor() {
      super();
      const subscription = Meteor.subscribe('sneakers');
      this.state = {
        ready: subscription.ready(),
        handle: Meteor.subscribe('sneakers'),
        subscription: subscription,
        sneakers: []
      }
  }

  // componentWillUnmount() {
  //     this.state.subscription.stop();
  // }

  sneakers() {
      return this.state.sneakers;
  }

  componentDidMount() {
   Tracker.autorun(() => {
     const isReady = this.state.ready;
     if (this.state.handle.ready()){
       var item = sneakers.find().fetch();
       console.log(item);
       this.setState({
          sneakers: item
      })
     }else{
       console.log("Its not ready did not mount");
     }
   });
 }

  // this is not being used/////

  renderItemsList() {
      return this.state.sneakers.map((sneaker) => (
        <HomePageItem key={sneaker._id} user={sneaker} styles={styles} />
      ));
  }

  render(){
    return(
      <div>
        <header className="home__banner">
            <div className="wrapper">
              <h1>Sell you rare sneakers</h1>
            </div>
        </header>
        <main className="cont wrapper">
          {this.renderItemsList()}
        </main>
      </div>
    )
  }
}

const styles = {

}

export default HomeContainer;
