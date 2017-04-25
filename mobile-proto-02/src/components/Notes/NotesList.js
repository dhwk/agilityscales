import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';

class NotesList extends Component{
  render(){
    var notes = this.props.notes.map((note, index) => {
      return <ListItem key={index}> {note} </ListItem>
    });
    return (
      <List style={{padding:'20px', fontSize:'large', textAlign:'center'}}>
        {notes}
      </List>
    )
  }
};

export default NotesList;
