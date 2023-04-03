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
      <ul>
        {
            this.state.datos.map((movie, idx)=><Card key={movie+idx} id={movie.id} name={movie.title} img={movie.poster_path} desc={movie.overview}/>)
        }
      </ul>
    )
  }
}
