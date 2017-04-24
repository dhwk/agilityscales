import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import firebase from 'firebase';

import AppBarTop from './components/AppBarTop';
import WhatsUp from './components/WhatsUp';


class App extends Component {

  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }

  componentDidMount(){
    this.setState({
      speed: 25
    });

    // const dbJson = document.getElementById("db-json");
    // const dbRef = firebase.database().ref();
    // dbRef.on('value', snap => {
    //   dbJson.innerText = JSON.stringify(snap.val(), null, 3);
    // });
    //
    // const dbSpeedRef = dbRef.child('example/speed');
    // dbSpeedRef.on('value', snap => {
    //   this.setState({speed: snap.val()});
    // });


  }

  render() {
    return (
      <div>
        <MultiThemeProvider>
          <div>
            <AppBarTop />
            <WhatsUp />
          </div>
        </MultiThemeProvider>
      </div>
    );
  }
}

export default App;
