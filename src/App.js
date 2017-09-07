import React, { Component } from 'react';
import CountdownListContainer from './Components/CountdownList/Countdown_List_Container';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountdownListContainer />
      </div>
    );
  }
}

export default App;
