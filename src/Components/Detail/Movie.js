import React, { Component } from 'react'

export default class Movie extends Component {
    constructor(props){
        super(props)
        console.log(this.props);
        this.state={
            movie:this.props.asd
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.asd !== this.props.asd) {
            this.setState({
                movie: this.props.asd
            })
        }
    }
  render() {
    return (
        <>
        <div>
{
// this.state.movie === '' ?
// <h1>Cargando..</h1> :
<div className='detail-container'>
    <img src={'https://image.tmdb.org/t/p/original'+this.state.movie.poster_path} />
<div className='detail-data'>
    <h1>{this.state.movie.title}</h1>
    <h3>Rating: {this.state.movie.vote_average}</h3>
    <h3>Premiered: {this.state.movie.release_date}</h3>
    <h3>Duration: {this.state.movie.runtime} min</h3>
    <p>{this.state.movie.overview}</p>

    <section className='genreList'>
          <h3>
          Genre:
          </h3>
          {}
          {this.state.movie.genres ? this.state.movie.genres.map((genre, idx)=>
          {return <p className='genreText' key={genre+idx}> {idx !== this.state.movie.genres.length - 1 ? genre.name + ',' 
          : genre.name} </p>}) : console.log('AA')}
         
     
    </section>
    <button>Add to favorites</button>
</div>

</div>
}
</div></>
      
    )
  }
}
