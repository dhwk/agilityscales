import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarTop from './AppBarTop';
import AddNote from './Notes/AddNote';
import NotesList from './Notes/NotesList';

class WhatsUp extends Component {

  render() {
    console.log(this.state);
    return (
      <div>
        <MultiThemeProvider>
          <div>
            <AppBarTop />
            <AddNote addNote={this.props.saveNote.bind(this)} />
            <NotesList notes={this.props.notes} />
          </div>
        </MultiThemeProvider>
      </div>
    );
  }
}

export default WhatsUp;
