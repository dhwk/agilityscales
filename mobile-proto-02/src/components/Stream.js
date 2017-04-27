import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarTop from './AppBarTop';
import NotesList from './Notes/NotesList';


class Stream extends Component {

  render() {
    return (
      <div>
        <MultiThemeProvider>
          <div>
            <AppBarTop />
            <h3 style={{textAlign:'center'}}>Stream of all Messages and Events</h3>
            <NotesList notes={this.props.notes} />
          </div>
        </MultiThemeProvider>
      </div>
    );
  }
}

export default Stream;
