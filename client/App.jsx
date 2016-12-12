import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

class App extends React.Component {
  render(){
    return(
      <div className="container-fluid">
        <h1>Hello</h1>
      </div>
    );
  }
}

export {App};
