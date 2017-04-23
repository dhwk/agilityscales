import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

import AppBarTop from './components/AppBarTop';

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

    const dbJson = document.getElementById("db-json");
    const dbRef = firebase.database().ref();
    dbRef.on('value', snap => {
      dbJson.innerText = JSON.stringify(snap.val(), null, 3);
    });

    const dbSpeedRef = dbRef.child('example/speed');
    dbSpeedRef.on('value', snap => {
      this.setState({speed: snap.val()});
    });


  }

  render() {
    return (
      <div className="App">
        <AppBarTop />
        <h2>{this.state.speed}</h2>
        <pre id="db-json"></pre>
      </div>
    );
  }
}

export default App;
