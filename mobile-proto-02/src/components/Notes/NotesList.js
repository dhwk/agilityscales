import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';

class NotesList extends Component{
  render(){
    var mynotes = [];
    for (var k in this.props.notes) {
      mynotes.push(<ListItem key={k}> {this.props.notes[k].message}</ListItem>)
    }
    
    return (
      <List style={{padding:'20px', fontSize:'large', textAlign:'center'}}>
        {mynotes}
      </List>
    )
  }
};

export default NotesList;
