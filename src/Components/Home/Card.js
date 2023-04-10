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

    changeText(){
      if(this.state.texto === 'Ver mas'){
          this.setState({
              texto: 'Ver menos',
              clase: 'show'
          })
      } else {
          this.setState({
              texto: 'Ver mas',
              clase:'hidden'
          })
      }
  }

  render() {

    console.log(this.state);
    return (
      <li className='movieContainer' key={this.state.key}>
        <Link className='movieLink' to={'detail/id/:id' + this.state.id}>
            <img className='movieImg' src={this.props.img} alt='asd'/>
          <div>

            <div className='movieText'>
            <h4 className='movieTitle'>{this.state.name}</h4>
            <p className='movieDesc'>{this.state.desc}</p>
            </div>
            <div className='movieButtons'>

            <button>Agregar a favoritos</button>
            <button>Detalle</button>
            <button>Ver más</button>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}
