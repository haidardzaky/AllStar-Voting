import React, { Component } from 'react'
import './App.css'

import mainLogo from './NBA_AllStar_LA.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img  src={mainLogo} alt="nba-allstar"/>
          <h1 className="App-title">All-Star Voting</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
