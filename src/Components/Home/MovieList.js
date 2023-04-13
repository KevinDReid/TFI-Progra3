import React, { Component } from "react";
import Card from "./Card";
import './style.css'
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosTop: props.datosTop,
      datosPop: props.datosPop,
      value: "",
      shouldDeleteH2: false,
      h2: "Popular",
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.datosPop !== this.props.datosPop) {
      this.setState({ datosPop: this.props.datosPop });
    }
    if (prevProps.datosTop !== this.props.datosTop) {
      this.setState({ datosTop: this.props.datosTop });
    }
  }
  prevent(event) {
    event.preventDefault();
    this.setState({ shouldDeleteH2: true, h2: "Results" });
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=97652419e5f4276e5a5fa6f28df39f8c&language=en-US&query=${this.state.value}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results.slice(0,5));
        this.setState({datosPop: data.results.slice(0,5)})
        data.results.length < 1 ? this.setState({h2: 'No Results'}) : console.log('asd');
      })
     
      .catch((error) => {
        console.log("Este es el error: " + error);
      });
  }
  changes(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { shouldDeleteH2 } = this.state;

    return (
      <>
        <form action="/" method="get" onSubmit={(event) => this.prevent(event)}>
          <input
            type="search"
            value={this.state.value}
            onChange={(event) => this.changes(event)}
            minLength={1}
            className="searchInput"
          />
          <button type="submit" className="bSearch">Search</button>
        </form>
        <div className="masterMoviesContainer">
          {shouldDeleteH2 ? null : (
            <div className="divCont">
              <button
                className="title"
                onClick={() =>
                  (window.location.href = "/all")
                }
              >
                <h2>Top Rated</h2>
              </button>
              <ul className="movieSuperContainer">

                {this.state.datosTop.map((movie, idx) => (
                  <Card
                    key={movie + idx}
                    id={movie.id}
                    name={movie.title || movie.name}
                    img={
                       movie.poster_path
                    }
                    desc={movie.overview}
                  />
                ))}
              </ul>
            </div>
          )}

          <div className="divCont">
            <button
            className="title"
            
            onClick={() =>
              (shouldDeleteH2 ? null : (window.location.href = "/all")
              )
            }
            >
              <h2>{this.state.h2}</h2>
            </button>
              
            <ul className="movieSuperContainer">
         
              {this.state.datosPop.map((movie, idx) => (
                <Card
                  key={movie + idx}
                  id={movie.id}
                  name={movie.title}
                  img={
                    movie.poster_path
                  }
                  desc={movie.overview}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
