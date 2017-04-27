import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';

class NotesList extends Component{

  render(){
    var mynotes = [];
    for (var k in this.props.notes) {
      mynotes.unshift(<ListItem key={k}>
        {this.props.notes[k].message}<br />
        <span style={{fontSize:'small', fontColor:'grey'}}>{new Date(this.props.notes[k].timestamp).toString()}</span>
      </ListItem>)
    }

    return (
      <div>
        <List style={{padding:'20px', fontSize:'large', textAlign:'center'}}>
          {mynotes}
        </List>
      </div>
    )
  }
};

export default NotesList;
