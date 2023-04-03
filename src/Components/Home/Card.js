import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.id,
            name: this.props.name,
            img: this.props.img,
            desc: this.props.desc
        }
    }
  render() {
    return (
      <li>
        <Link to={'detail/id/' + id}></Link>
      </li>
    )
  }
}
