import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Rebase from 're-base';
import AppBarTop from './components/AppBarTop';
import WhatsUp from './components/WhatsUp';

var base = Rebase.createClass({
  apiKey: "AIzaSyCpEKCjdmAYSvH6C1HbJCnkSBde5u5CYf0",
  authDomain: "proto-c8716.firebaseapp.com",
  databaseURL: "https://proto-c8716.firebaseio.com",
  projectId: "proto-c8716",
  storageBucket: "proto-c8716.appspot.com",
  messagingSenderId: "561917541704"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  };

  init(){
    // this.ref = base.syncState(`whatsup/${this.props}`,
    this.ref = base.syncState(`notes`,
    {
      context: this,
      asArray: true,
      state: 'notes'
    });
  }


  componentDidMount(){
    this.init();
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  componentWillReceiveProps(){
    base.removeBinding(this.ref);
    this.init();
  }
  handleAddNote(newNote){
    this.setState({
      notes: this.state.notes.concat([newNote])
    })
  }

  render() {
    return (
      <div>
        <MultiThemeProvider>
          <div>
            <AppBarTop />
            <WhatsUp
              notes={this.state.notes}
              addNote={this.handleAddNote.bind(this)}
            />
          </div>
        </MultiThemeProvider>
      </div>
    );
  }
}

export default App;
