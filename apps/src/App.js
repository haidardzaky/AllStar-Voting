import React, {Component} from 'react'

import './App.css'

import mainLogo from './NBA_AllStar_LA.png'
import Profile from "./components/Profile"


class App extends Component {
  render() {
    return (<div className="App">
      <div className="App-header">
        <div>
          <img src={mainLogo} alt="nba-allstar"/>
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

      <div class="ui centered cards">
        <div class="card">
          <Profile image="/images/kyrieirving.png" name="Kyrie Irving" team="Boston Celtics" number="191 cm" trophy="1x NBA Champion" star="5x NBA All-Star"/>
        </div>
        <div class="card">
          <Profile image="/images/stephencurry.png" name="Stephen Curry" team="Golden State Warriors" number="190 cm" trophy="2x NBA Champions" star="5x NBA All-Star"/>
        </div>
        <div class="card">
          <Profile image="/images/rickyrubio.png" name="Ricky Rubio" team="Utah Jazz" number="193 cm" trophy="-" star="-"/>
        </div>
        <div class="card">
          <Profile image="/images/jamesharden.png" name="James Harden" team="Houston Rockets" number="196 cm" trophy="-" star="6x NBA All-Star"/>
        </div>
        <div class="card">
          <Profile image="/images/isaiahthomas.png" name="Isaiah Thomas" team="Cleveland Cavaliers" number="175 cm" trophy="-" star="2x NBA All-Star"/>
        </div>
        <div class="card">
          <Profile image="/images/tonyparker.png" name="Tony Parker" team="San Antonio Spurs" number="188 cm" trophy="4x NBA Champions" star="6x NBA All-Star"/>
        </div>
        <div class="card">
          <Profile image="/images/rickyrubio.png" name="Ricky Rubio" team="Utah Jazz" number="3" trophy="-" star="-"/>
        </div>
        <div class="card">
          <Profile image="/images/rickyrubio.png" name="Ricky Rubio" team="Utah Jazz" number="3" trophy="-" star="-"/>
        </div>
      </div>
      <hr/>

      <br/>
      <div>
        <div class="ui large center aligned header">Frontcourt</div><br/>
      </div>

      <div class="container">
        <br/>
        <Profile image="/images/kyrieirving.png" name="Kyrie Irving" team="Boston Celtics" number="11"/>
        <Profile image="/images/stephencurry.png" name="Stephen Curry" team="Golden State Warriors" number="30"/>
        <Profile image="/images/rickyrubio.png" name="Ricky Rubio" team="Utah Jazz" number="3"/>
      </div>
    </div>)
  }
}

export default App;
