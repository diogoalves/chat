import React, { Component } from 'react';
import TopBar from './TopBar';
import Conversation from './Conversation';
import Input from './Input';
import withRoot from './withRoot';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Conversation />
        <Input />
      </div>
    );
  }
}

export default withRoot(App);
