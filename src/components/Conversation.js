import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MessageItem from './MessageItem';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Conversation extends Component {
  scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
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
      <Paper className={classes.root} elevation={1}>
        {messages.map((e, i) => (
          <MessageItem
            key={i}
            time={new Date(e.time).toLocaleString()}
            author={e.author}
            content={e.content}
          />
        ))}
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps)(withStyles(styles)(Conversation));
