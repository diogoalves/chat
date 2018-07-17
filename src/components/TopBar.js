import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import actions from '../actions';
import deepOrange from '@material-ui/core/colors/deepOrange';

const styles = {
  root: {
    flexGrow: 1,
    position: 'sticky',
    top: 0,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500]
  }
};

class TopBar extends React.Component {
  state = {
    opened: false,
    value: ''
  };

  handleChange = event => {
    const value = event.target.value.toUpperCase();
    this.setState({
      ...this.state,
      value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const value = this.state.value;
    this.props.dispatch(actions.setUser(value));
    this.setState(() => ({ opened: false }));
  };

  toggle = () => {
    this.setState(currentState => ({
      ...currentState,
      opened: !currentState.opened
    }));
  };

  render() {
    const { classes, user, quantity } = this.props;
    const { opened, value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Tooltip title="Connected users" placement="bottom">
              <Avatar className={classes.orangeAvatar}>{quantity}</Avatar>
            </Tooltip>
            <Button onClick={this.toggle} color="inherit">
              {user}
            </Button>
          </Toolbar>
          <Dialog open={!user || opened} onClose={this.toggle}>
            <DialogTitle>Please choose your name</DialogTitle>
            <DialogContent>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  placeholder="anonymous"
                  margin="normal"
                  value={value}
                  onChange={this.handleChange}
                  fullWidth
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleSubmit} color="primary">
                Change
              </Button>
            </DialogActions>
          </Dialog>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  quantity: state.quantity
});

export default connect(mapStateToProps)(withStyles(styles)(TopBar));
