import React, { Component } from 'react';

class StopWatch extends Component {
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
