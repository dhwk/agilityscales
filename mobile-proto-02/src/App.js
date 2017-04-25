import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Rebase from 're-base';
import AppBarTop from './components/AppBarTop';
import WhatsUp from './components/WhatsUp';

import credentials from './credentials.js';

var base = Rebase.createClass(credentials);

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
