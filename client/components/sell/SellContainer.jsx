import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SellPage from './SellPage';
import { createContainer } from 'meteor/react-meteor-data';
import { Slingshot } from 'meteor/edgee:slingshot';

// App component - represents the whole app
class SellContainer extends Component {

  render(){
    return(
      <div className="cont">
        <SellPage />
      </div>
    )
  }
}

export default SellContainer;
