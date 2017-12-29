import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tictactoe from './components/Tictactoe';

import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
        <span>
          <header className="App-header" >
            <h1><center>Welcome</center></h1>
          </header>
            <Calculator />
            <br />
            <br />
          <Tictactoe />

          </span>
    );
  }
}

export default App;
