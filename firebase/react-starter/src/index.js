import React from 'react';
import ReactDOM from 'react-dom';

import * as firebase from 'firebase';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './App';

// firebase
var config = {
  apiKey: "AIzaSyCpEKCjdmAYSvH6C1HbJCnkSBde5u5CYf0",
  authDomain: "proto-c8716.firebaseapp.com",
  databaseURL: "https://proto-c8716.firebaseio.com",
  projectId: "proto-c8716",
  storageBucket: "proto-c8716.appspot.com",
  messagingSenderId: "561917541704"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
