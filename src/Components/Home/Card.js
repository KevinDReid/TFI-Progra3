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
    console.log(this.state.img);
    return (
      <li>
        <Link to={'detail/id/:id' + this.state.id}>
            <img className='movieImg' src={this.props.img} alt='asd'/>
            <h4>{this.state.name}</h4>
            <p>{this.state.desc}</p>
        </Link>
      </li>
    )
  }
}
