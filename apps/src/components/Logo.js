import React, {Component} from "react"

import Nba from "./Nba"

export default class Logo extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return {
      <div>
        <Nba image={this.props.image} name={this.props.name}/>
      </div>
    }
  }
}
