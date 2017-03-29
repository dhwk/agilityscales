/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

import MarkdownElement from './components/MarkdownElement';
import startText from './startText.md';

import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
  topic: {
    fontSize: 'big',
    textAlign: 'center',
  },
  slide: {
    padding: 0,
  },
  stage1: { backgroundColor: '#FF9800', margin: 0, textAlign: 'center',},
  stage2: { backgroundColor: '#FF80AB', margin: 0,textAlign: 'center',},
  stage3: { backgroundColor: '#9575CD', margin: 0,textAlign: 'center',},
  stage4: { backgroundColor: '#81C784', margin: 0,textAlign: 'center',},
  stage5: { backgroundColor: '#82B1FF', margin: 0,textAlign: 'center',},
  stage6: { backgroundColor: '#C51162', margin: 0,textAlign: 'center',},
};


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false, // Dialog
      slideIndex: 0, // SwipeableViews
    };
  }

  // Tab change
  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <h1 style={styles.topic}>Core Values</h1>
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="1" value={0} style={styles.stage1}/>
            <Tab label="2" value={1} style={styles.stage2}/>
            <Tab label="3" value={2} style={styles.stage3}/>
            <Tab label="4" value={3} style={{backgroundColor: '#81C784'}} />
            <Tab label="5" value={4} style={{backgroundColor: '#82B1FF'}} />
            <Tab label="6" value={5} style={{backgroundColor: '#C51162'}} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
            style={styles.slide}
          >
              <div>
                  <h2 style={styles.stage1}>Start</h2>
                <MarkdownElement text={startText} />
              </div>
              <div>
                <h2 style={styles.stage2}>Learn</h2>
                <div>asdfasdf</div>
              </div>
              <div>
                <h2 style={styles.stage3}>Try</h2>
              </div>
              <div>
                <h2 style={styles.stage4}>Check</h2>
              </div>
              <div>
                <h2 style={styles.stage5}>Scale</h2>
              </div>
              <div>
                <h2 style={styles.stage6}>Finish</h2>
              </div>
          </SwipeableViews>


        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
