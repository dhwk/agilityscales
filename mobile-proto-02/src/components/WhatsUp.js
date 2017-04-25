import React, { Component } from 'react';
import AddNote from './Notes/AddNote';
import NotesList from './Notes/NotesList';

class WhatsUp extends Component {


  handleSubmit(e) {
    e.preventDefault();
  };



  render() {
    return (
      <div>
        <AddNote addNote={this.props.addNote} />
        <NotesList notes={this.props.notes} />
      </div>
    );
  };
};

export default WhatsUp;
