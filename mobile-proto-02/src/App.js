import React, { Component } from 'react';
import WhatsUp from './components/WhatsUp'
import Stream from './components/Stream';

import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/whatsup' />
          </Route>
          <Route path='/whatsup' component={WhatsUp} />
          <Route path='/stream' component={Stream} />
          <Route component={WhatsUp} />
        </Switch>
      </HashRouter>
    );
  }
}



export default App
