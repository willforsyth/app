import { Meteor } from 'meteor/meteor';
import React, {PropTypes} from 'react';
import {HeaderContainer} from './common/headerContainer';
import {Sidebar} from './common/sidebar';
import {Footer} from './common/footer';

class App extends React.Component {
  render(){
    return(
      <div className="container-fluid">
        <HeaderContainer />
        <Sidebar />
          <main>
            {this.props.children}
          </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export {App};
