import React, { Component } from 'react';
import TopBar from './TopBar';
import Conversation from './Conversation';
import Input from './Input';
import withRoot from './withRoot';
import { askPermission } from '../utils/notifcation';

class App extends Component {
  componentDidMount() {
    askPermission();
  }

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
