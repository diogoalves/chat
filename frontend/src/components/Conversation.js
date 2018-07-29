import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MessageItem from './MessageItem';
import List from '@material-ui/core/List';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: theme.spacing.unit * 9,
    bottom: 0,
    left: 0,
    right: 0
  },
  paper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 'calc(100vh - 170px)',
    overflow: 'auto'
  }
});

class Conversation extends Component {
  scrollToBottom = () => {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { messages = [], classes } = this.props;
    return (
      <div className={classes.root}>
        <div id="messages" className={classes.paper}>
          <List>
            {messages.map((e, i) => (
              <MessageItem
                key={i}
                time={new Date(e.time).toLocaleTimeString()}
                author={e.author}
                content={e.content}
              />
            ))}
          </List>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps)(withStyles(styles)(Conversation));
