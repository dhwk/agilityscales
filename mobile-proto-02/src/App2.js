import React, { Component } from 'react';
import App from './App';
import { HashRouter, Route, Link, Redirect, Switch } from 'react-router-dom';

const Home = () => <h1>Hello Home!</h1>
//const App = () => <h1>What's Up?</h1>

class App2 extends Component {
  render() {
    return (
      <HashRouter>
      <Switch>
          <Route exact path='/'>
            <Redirect to='/whatsup' />
          </Route>
          <Route path='/whatsup' component={App} />
          <Route component={App} />
      </Switch>
    </HashRouter>
    );
  }
}

// const Nav = () => (
//     <div>
//     <Link to='/'>Home</Link>
//     <Link to="/whatsup">What's up?</Link>
//     <Link to="/stream">Stream</Link>
//     <Link to="/chat">Chat</Link>
//   </div>
// );
// const Container = (props) => {
//   <div>
//     <Nav />
//     {props.children}
//   </div>
// }


export default App2
