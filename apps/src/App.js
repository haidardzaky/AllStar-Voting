import React, { Component } from 'react'

import './App.css'

import mainLogo from './NBA_AllStar_LA.png'
import Profile from "./components/Profile"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
          <img  src={mainLogo} alt="nba-allstar"/>
          </div>
          <div>
            <div class="ui huge yellow header">All-Star 2018 Voting</div>
            <p>Los Angeles, February 18 2018</p>
          </div>
          <br/>
        </div>

        <br/>
        <div>
          <div class="ui large center aligned header">Backcourt</div><br/>
        </div>

        <div class = "container">
          <br/>
          <Profile image="/images/kyrieirving.png" name="Kyrie Irving"/>
          <Profile image="/images/stephencurry.png" name="Stephen Curry"/>
          <Profile image="/images/rickyrubio.png" name="Kyrie Irving"/>
        </div>
          <hr/>
      </div>

    )
  }
}

export default App;
