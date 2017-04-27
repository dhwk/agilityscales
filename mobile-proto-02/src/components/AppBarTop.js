import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Logged out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';




class AppBarTop extends Component {

  constructor() {
    super();
    this.state = {
      loged: false,
      open: false
    };
  }

  handleToggel = () => this.setState({open: !this.state.open});

  componentDidMount(){
    this.setState({
    });

  }

  render() {
    return (
      <div>
          <AppBar
            title="Agility Scales"
            onTouchTap={this.handleToggel}
            iconElementRight={<Login />}
          />
          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={(open) => this.setState({open})}
            >
            <MenuItem>What's up?</MenuItem>
            <MenuItem>Event Stream</MenuItem>
          </Drawer>
      </div>
    );
  }
}

export default AppBarTop;
