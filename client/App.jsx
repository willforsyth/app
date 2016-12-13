import { Meteor } from 'meteor/meteor';
import React, {PropTypes} from 'react';
import {Header} from './common/header';
import {Footer} from './common/footer';

class App extends React.Component {
  render(){
    return(
      <div className="container-fluid">
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export {App};
