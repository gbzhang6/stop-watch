import React, { Component } from 'react';
import './App.css';
import StopWatch from "./container/StopWatch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Stop Watch </h1>
        < StopWatch />
      </div>
    );
  }
}

export default App;
