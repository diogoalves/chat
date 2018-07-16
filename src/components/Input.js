import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import actions from '../actions';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Input extends Component {
  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const value = this.state.value.trim();
    if (value) {
      this.props.dispatch(
        actions.addMsg({ time: new Date().getTime(), content: value })
      );
    }
    this.setState(() => ({ value: '' }));
  };

  render() {
    return (
      <Paper className={this.props.classes.root} elevation={1}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            placeholder="Write a message here"
            fullWidth
            margin="normal"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default connect()(withStyles(styles)(Input));