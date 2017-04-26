import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddNote extends Component{
  handleSubmit(){
    var newNote = document.getElementById("txtfd").value;
    document.getElementById("txtfd").value = "";
    this.props.addNote(newNote);
  }
  render(){
    return (
      <div style={{padding:'20px', fontSize:'large', textAlign:'center'}}>
        <span>What's up?</span>
        <br />
        <TextField
          id="txtfd"
          placeholder="Today I brought my team ice cream."
          multiLine={true}
          rows={3}
          rowsMax={20}
          // eslint-disable-next-line
          onKeyPress={(e) => {(e.key === 'Enter' ?
           this.handleSubmit() : null)}}
        />
        <br />
        <RaisedButton
          label="Send"
          onClick={this.handleSubmit.bind(this)}
          style={{margin:12}}
        />
      </div>
    )
  }
};


export default AddNote;
