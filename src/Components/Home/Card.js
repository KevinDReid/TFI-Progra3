import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            key: this.props.key,
            id: this.props.id,
            name: this.props.name,
            img: this.props.img,
            desc: this.props.desc
        }
    }
  render() {

    console.log(this.state);
    return (
      <li className='movieContainer' key={this.state.key}>
        <Link to={'detail/id/:id' + this.state.id}>
            <img className='movieImg' src={this.props.img} alt='asd'/>
            <div className='movieText'>
            <h4 className='movieTitle'>{this.state.name}</h4>
            <p className='movieDesc'>{this.state.desc}</p>
            </div>
        </Link>
      </li>
    )
  }
}
