import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

// does not work!!!!!!!!!!!!!!!!!!

class Progress extends Component {

  constructor(props) {
    super(props);
    this.state = { completed: 0 };
  };

  componentDidMount(){
    this.setState( {completed: 100})
    document.getElementById('progress').style.visibility="hidden";
  }

  render(){
    return(
      <CircularProgress
        id='progress'
        size={60}
        thickness={7}
        style={{textAlign:'center', visibility: 'visible', display:'block'}}/>
    )
  }
}

export default Progress;
