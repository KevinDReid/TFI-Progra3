import React, { Component } from 'react'
import './style.css'
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
        <div className='detail-container'>
            <img src={'https://image.tmdb.org/t/p/original'+this.state.movie.backdrop_path} />
        <div className='detail-data'>
            <h1>{this.state.movie.title}</h1>
            <h3>Rating: {this.state.movie.vote_average}</h3>
            <h3>Premiered: {this.state.movie.release_date}</h3>
            <h3>Duration: {this.state.movie.runtime} min</h3>
            <p>{this.state.movie.overview}</p>
            <ul>
                <h3>
                Genre: {this.state.movie.genres.map((genre, idx) => <li key={genre+idx}>
                {genre.genres}

            </li> )}</h3></ul>
            <button>Add to favorites</button>
        </div>

        </div>
        }
      </div>
      <Footer/>
      </>
    )
  }
}
