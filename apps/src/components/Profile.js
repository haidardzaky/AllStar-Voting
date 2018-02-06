import React, { Component } from "react"
import './Profile.css'

import Player from "./Player"
import VoteCount from "./VoteCount"

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increaseVote = this.increaseVote.bind(this)
  }

  increaseVote(){
    this.setState((prevState) => ({
      count:prevState.count + 1
    }))
  }

  render() {
    return (
      <div className="card">
        <Player image={this.props.image} name={this.props.name}/>
        <hr className="hr-profile"/>
        <button onClick={this.increaseVote}>VOTE</button>
        <VoteCount count={this.state.count}/>
      </div>
    )
  }
}
