import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Stop Watch </h1>
        <h2> 0:00 </h2> {/*placeholder for time*/}
        <button type="button">Start</button>
        <button type="button">Stop</button>
      </div>
    );
  }
}

export default App;
