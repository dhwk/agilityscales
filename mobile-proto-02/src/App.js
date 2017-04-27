import React, { Component } from 'react';
import { PropsRoute, PropsRedirect } from './components/PropsRouting';
import WhatsUp from './components/WhatsUp'
import Stream from './components/Stream';
import Rebase from 're-base';

import { HashRouter, Route, Switch } from 'react-router-dom';


import credentials from './credentials.js';

const base = Rebase.createClass(credentials);

let loginPromise = base.auth().signInAnonymously()


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      notes: {},
      user: {}
    };
  };

  setLoginUserState() {
    loginPromise.then( user => {
      this.setState({
        user: {
          displayName: user.displayName,
          isAnonymous: user.isAnonymous,
          uid: user.uid
        }
      });
    }).catch(error => console.error(error));
  }

  init(){
    // this.ref = base.syncState(`whatsup/${this.props}`,
    this.ref = base.syncState(`whatsup`,
    {
      context: this,
      state: 'notes',
      queries: {
        // orderByChild:'timestamp',
        limitToLast: 20
      }
    });
  }

  componentDidMount(){
    this.init();
    this.setLoginUserState();
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  componentWillReceiveProps(){
    base.removeBinding(this.ref);
    this.init();
  }

  saveNote(newNote){
    //e.preventDefault(); //how to use?

    var newData =
    {
      message: newNote,
      uid: this.state.user.uid || "no uid",
      displayName: this.state.user.displayName || "Guest",
      isAnonymous: this.state.user.isAnonymous,
      timestamp: base.database.ServerValue.TIMESTAMP
    }
    var newRef = base.push(
      'whatsup', { data: newData }
    );
    // TODO: warning  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    this.setState(this.state.notes[newRef.key] = newData);
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/'>
            <PropsRedirect to='/whatsup' />
          </Route>
          <PropsRoute path='/whatsup' component={WhatsUp} notes={this.state.notes} saveNote={this.saveNote.bind(this)} />
          <PropsRoute path='/stream' component={Stream} notes={this.state.notes}/>
          <PropsRoute component={WhatsUp} notes={this.state.notes}/>
        </Switch>
      </HashRouter>
    );
  }
}



export default App;
