import React, { Component } from 'react'

export default class MovieList extends Component {
    constructor(props){
        super(props)
        this.state={
            datos: this.props.datos
        }
    }
    
  render() {
    return (
      <li>
        {
            this.state.datos.map((movie, idx)=>)
        }
      </li>
    )
  }
}
