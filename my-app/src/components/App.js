import React, { Component } from 'react';
import logo from './logo.svg';
import '../style/App.css';
import CharacterBox from './character-box'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Clicky Game</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

         <CharacterBox />

      </div>
    );
  }
}

export default App;
