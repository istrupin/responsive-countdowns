import React, { Component } from 'react';
import CountdownContainer from './Components/Countdown/Countdown_Container';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountdownContainer />
      </div>
    );
  }
}

export default App;
