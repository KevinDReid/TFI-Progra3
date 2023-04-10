import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default class Detail extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            movie:''
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=97652419e5f4276e5a5fa6f28df39f8c`)

        .then(resp => resp.json())
        .then(data => this.setState({
            movie:data
        }))
    }

  render() {
    console.log(this.state.movie)
    return (
        <>
        <Header/>
      <div>
        {
        this.state.movie === '' ?
        <h1>Cargando..</h1> :
        <div>
            <img src={this.state.movie.image} />
            <h1>{this.state.movie.title}</h1>
            Calificación (rating).
Fecha de estreno.
Duración.
Sinópsis.
Género al que pertenece la película.
link o botón agregar a “favoritos”

        </div>
        }
      </div>
      <Footer/>
      </>
    )
  }
}
