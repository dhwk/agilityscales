import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class AppBarTop extends Component {

  constructor() {
    super();
    this.state = {
      logedIn: false
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
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </MultiThemeProvider>
      </div>
    );
  }
}

export default AppBarTop;
