import React, { Component } from "react";
import "./style.css";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      movie: this.props.use,
      id: this.props.id,
      favorite: false,
    };
  }
  componentDidMount() {
    let storage = localStorage.getItem("favorites");
    let storageArray = JSON.parse(storage);

    if (storageArray !== null) {
      let inStorage = storageArray.includes(this.state.id);
      if (inStorage) {
        this.setState({
          favorites: true,
        });
      }
    }
  }
  addFav(id) {
    let storage = localStorage.getItem("favorites");

    if (storage === null) {
      let stringedArray = JSON.stringify([id]);
      localStorage.setItem("favorites", stringedArray);
    } else {
      let stringToArray = JSON.parse(storage);
      stringToArray.push(id);
      let stringedArray = JSON.stringify(stringToArray);
      localStorage.setItem("favorites", stringedArray);
    }

    this.setState({
      favorite: true,
    });
  }

  removeFromFav(id) {
    let storage = localStorage.getItem("favorites");
    console.log(storage[0] == id);
    let storageArray = JSON.parse(storage);
    let filter = storageArray.filter((elm) => elm !== id);
    let filterToString = JSON.stringify(filter);
    localStorage.setItem("favorites", filterToString);

    this.setState({
      favorite: false,
    });
    console.log(this.state.favorite);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.use !== this.props.use) {
      this.setState({
        movie: this.props.use,
      });
    }
  }

  render() {
    return (
      <div>
        {
          // this.state.movie === '' ?
          //<h1>Cargando..</h1> :
          <div className="detail-container">
            <img
              src={
                "https://image.tmdb.org/t/p/original" +
                this.state.movie.poster_path
              }
            />
            <div className="detail-data">
              <h1>{this.state.movie.title}</h1>
              <h3>Rating: {this.state.movie.vote_average}</h3>
              <h3>Premiered: {this.state.movie.release_date}</h3>
              <h3>Duration: {this.state.movie.runtime} min</h3>
              <p>{this.state.movie.overview}</p>
              <section className="genreList">
                <h3>Genre:</h3>
                {}
                {this.state.movie.genres
                  ? this.state.movie.genres.map((genre, idx) => {
                      return (
                        <p className="genreText" key={genre + idx}>
                          {" "}
                          {idx !== this.state.movie.genres.length - 1
                            ? genre.name + ","
                            : genre.name}{" "}
                        </p>
                      );
                    })
                  : console.log("AA")}
              </section>
              {localStorage.getItem("favorites") != null &&
              localStorage.getItem("favorites").includes(this.state.id) ? (
                <button onClick={() => this.removeFromFav(this.state.id)}>
                  Remove
                </button>
              ) : (
                <button onClick={() => this.addFav(this.state.id)}>Add</button>
              )}{" "}
            </div>
          </div>
        }
      </div>
    );
  }
}
