import React, { Component } from 'react';

class StopWatch extends Component {
  state = {
    timeNow: {},
    splitTimes: []
  }

  handleStartClick = (startTime) =>{
    this.setState({
      timeNow: 0
    })
  }

  handleStopClick = (stopTime) => {

  }

  handleSplitClick = (timeNow) => {
    this.setState({
      splitTimes: [...this.state.splitTimes, timeNow]
    })
  }


  render(){
    return(
      <div>
        <h2> 0:00 </h2>
        <button type="button" onClick={this.handleStartClick}>Start</button>
        <button type="button" onClick={this.handleSplitClick}>Split</button>
        <button type="button" onClick={this.handleStopClick}>Stop</button>
      </div>
    )
  }
}

export default StopWatch
