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
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import actions from '../actions';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
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
        <AppBar position="static" color="default">
          <Toolbar>
            <Tooltip title="Connected users" placement="right">
              <Badge
                className={classes.menuButton}
                color="secondary"
                badgeContent={quantity}
              >
                <IconButton
                  aria-owns="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Badge>
            </Tooltip>
            <Button onClick={this.toggle}>{user}</Button>
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
