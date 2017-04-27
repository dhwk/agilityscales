import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render(
  <App2 />,
  document.getElementById('root')
);
