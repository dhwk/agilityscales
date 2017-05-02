import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import './index.css'

injectTapEventPlugin();

const start = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
)

if (window.cordova) {
  document.addEventListener('deviceready', start, false)
} else {
  start()
}
