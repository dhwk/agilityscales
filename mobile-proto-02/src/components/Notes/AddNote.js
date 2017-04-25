import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddNote extends Component{
  handleSubmit(){
    //var newNote = ReactDOM.findDOMNode(this.refs.note).value;
    var newNote = document.getElementById("txtfd").value;
    ReactDOM.findDOMNode(this.refs.note).value = '';
    this.props.addNote(newNote);
  }
  render(){
    return (
      <div style={{padding:'20px', fontSize:'large', textAlign:'center'}}>
        <span>What's up?</span>
        <br />
        <TextField
          id="txtfd"
          ref="note"
          placeholder="Today I brought my team ice cream."
          multiLine={true}
          rows={3}
          rowsMax={20}
        />
        <br />
        <RaisedButton
          label="Send"
          id="send"
          onClick={this.handleSubmit.bind(this)}
          style={{margin:12}}
        />
      </div>
    )
  }
};


export default AddNote;
