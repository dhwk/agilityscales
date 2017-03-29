/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

//import MarkdownElement from './components/MarkdownElement';
//import startText from './startText.md';

import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
  header: {
    fontSize: 48,
  },
  pink: {
    fontSize: 24,
    paddingTop: 0,
    marginBottom: 0,
    fontWeight: 400,
    backgroundColor: '#FF80AB'
  },
  slide: {
    padding: 5,
  },
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
        <div style={styles.container}>
          <h1>Core Values</h1>
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="1" value={0} style={{backgroundColor: '#FF9800'}}/>
            <Tab label="2" value={1} style={{backgroundColor: '#FF80AB'}} />
            <Tab label="3" value={2} style={{backgroundColor: '#9575CD'}} />
            <Tab label="4" value={3} style={{backgroundColor: '#81C784'}} />
            <Tab label="5" value={4} style={{backgroundColor: '#82B1FF'}} />
            <Tab label="6" value={5} style={{backgroundColor: '#C51162'}} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div>
              <h2 style={{backgroundColor: '#FF9800', margin:0}}>Start</h2>
              {/* <MarkdownElement text={stylesText} /> */}
              <div>
              ## Start Improvement

              This app is a prototype. We can improve many things. Do you want to build the real version?

              ### So, what’s this all about?
              - You want to scale agile but you don’t know how to proceed.
              - You like some methods and frameworks but they don’t fit in your context.
              - You want to change the organization but it’s hard enough to change your team.

              ### Improve your team for this topic in just a few steps:
              .	Start when your team is ready to explore this topic;
              .	Learn about this topic with articles and examples;
              .	Try practices that could help you achieve progress;
              .	Check if one or more practices are working for you;
              .	Scale between full control and self-organization;
              .	Finish with recognition for you and your team.

              To get started, move the topic card to the next column.

              This app is a prototype. We can improve many things. Do you want to build the real version?
            </div>
            </div>
            <div style={styles.slide}>
              <h2 style={{styles.pink, styles.header}}>Learn</h2>
            </div>
            <div style={styles.slide}>
              <h2 style={styles.headline}>Try</h2>
            </div>
            <div style={styles.slide}>
              <h2 style={styles.headline}>Check</h2>
            </div>
            <div style={styles.slide}>
              <h2 style={styles.headline}>Scale</h2>
            </div>
            <div style={styles.slide}>
              <h2 style={styles.headline}>Finish</h2>
            </div>

          </SwipeableViews>


        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
