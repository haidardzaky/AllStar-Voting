import React, { Component } from "react"

export default class Nba extends Component {
  render() {
    return <img src={this.props.image} alt={this.props.name} />
  }
}
