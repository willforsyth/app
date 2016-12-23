import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class ItemPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
        data: Meteor.users.find().fetch(),
        subscription: {
          item: Meteor.subscribe('allUsersItems')
        }
      }
  }

  componentWillUnmount() {
      this.state.subscription.item.stop();
  }

  // showData() {
  //     if
  // }

  render(){
      return (
        <div>
          <pre>
            <code>
              {JSON.stringify(this.state, null, 4)}
            </code>
          </pre>
          <pre>
            <code>
              {JSON.stringify(this.props, null, 4)}
            </code>
          </pre>
          <p>{this.props.params.id}</p>
          <p>{this.state.data.id}</p>
        </div>
      )
    }
}

export default ItemPage;
