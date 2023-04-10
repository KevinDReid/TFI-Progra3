import React, { Component } from "react";
import Card from "./Card";
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      datosTop: props.datosTop,
      datosPop: props.datosPop,
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

  render() {
    console.log(this.state);
    if (this.state.datosPop.length === 0 || this.state.datosTop.length === 0) {
      return <p>Loading...</p>;
    } else {
      console.log(this.state.datosPop);
      return (
        <div className="masterMoviesContainer">
          <div className="divCont">
            <h2>Top Rated</h2>
            <ul className="movieSuperContainer">
              {this.state.datosTop.map((movie, idx) => (
                <Card
                  key={movie + idx}
                  id={movie.id}
                  name={movie.title}
                  img={
                    "https://image.tmdb.org/t/p/original" + movie.poster_path
                  }
                  desc={movie.overview}
                />
              ))}
            </ul>
          </div>
          <div className="divCont">
            <h2>Popular</h2>
            <ul className="movieSuperContainer">
              {this.state.datosPop.map((movie, idx) => (
                <Card
                  key={movie + idx}
                  id={movie.id}
                  name={movie.title}
                  img={
                    "https://image.tmdb.org/t/p/original" + movie.poster_path
                  }
                  desc={movie.overview}
                />
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}
