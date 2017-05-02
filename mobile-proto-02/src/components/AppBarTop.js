import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';

import './AppBarTop.css'

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

  // handleToggel = () => this.setState({open: !this.state.open});
  handleMenuButtonClick() {
    this.setState({open: !this.state.open})
  }

  handleLoginButtonClick() {
  }

  render() {
    return (
      <div className="AppBarTop">
          <AppBar
            title="Agility Scales"
            onLeftIconButtonTouchTap={e => this.handleMenuButtonClick(e)}
            iconElementRight={
              <Login onTouchTap={e => this.handleLoginButtonClick(e)} />
            }
          />
          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={(open) => this.setState({open})}
            >
            <MenuItem
              containerElement={<Link to="/whatsup"/>}
              primaryText="What's up?"
            />
            <MenuItem
              containerElement={<Link to="/stream"/>}
              primaryText="Steam"
            />
          </Drawer>
      </div>
    );
  }
}

export default AppBarTop;
