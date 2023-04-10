import React, { Component } from 'react'
import Card from './Card'
export default class MovieList extends Component {
    constructor(props){
        super(props)
        console.log(this.props);
        this.state={
            datos: props.datos
        }
    }
    componentDidUpdate(prevProps) {
      if (prevProps.datos !== this.props.datos) {
        this.setState({ datos: this.props.datos });
      }
    }

  render() {
    console.log(this.state)
    if (this.state.datos.length === 0) {
      return <p>Loading...</p>;
    }
  
    else{
      console.log(this.state.datos)
      return (

      <ul className='movieSuperContainer'>

        {
            this.state.datos.map((movie, idx)=><Card key={movie+idx} id={movie.id} name={movie.title} img={'https://image.tmdb.org/t/p/original' + movie.poster_path} desc={movie.overview}/>)
        }
      </ul>
    )
  }}
}
