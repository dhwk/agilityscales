import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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
      loged: false
    };
  }

  componentDidMount(){
    this.setState({
    });

  }

  render() {
    return (
      <div className="App">
        <MultiThemeProvider muiTheme={getMuiTheme()}>
          <AppBar
            title="Agility Scales"
            iconElementRight={<Login />}
          />
        </MultiThemeProvider>
      </div>
    );
  }
}

export default AppBarTop;
