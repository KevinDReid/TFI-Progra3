import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import { ClipLoader } from "react-spinners";
import Box from "../../Components/All/Box";
import Footer from "../../Components/Footer/Footer";
export default class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      isLoading: true,
      currentPage: 1,
      selectedGenre: '',
      genres: [
        { id: 28, name: 'Action' },
        { id: 12, name: 'Adventure' },
        { id: 16, name: 'Animation' },
        { id: 35, name: 'Comedy' },
        { id: 80, name: 'Crime' },
        { id: 99, name: 'Documentary' },
        { id: 18, name: 'Drama' },
        { id: 10751, name: 'Family' },
        { id: 14, name: 'Fantasy' },
        { id: 36, name: 'History' },
        { id: 27, name: 'Horror' },
        { id: 10402, name: 'Music' },
        { id: 9648, name: 'Mystery' },
        { id: 10749, name: 'Romance' },
        { id: 878, name: 'Science Fiction' },
        { id: 10770, name: 'TV Movie' },
        { id: 53, name: 'Thriller' },
        { id: 10752, name: 'War' },
        { id: 37, name: 'Western' }
      ]
    };
  }

  
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=97652419e5f4276e5a5fa6f28df39f8c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&&page=1&with_watch_monetization_types=flatrate`
    )
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.setState({ datos: data.results });
        this.setState({ isLoading: false });
      })

      .catch(function (error) {
        console.log("Este es el error: " + error);
      });
  }
  cargarMasDatos = () => {
    this.setState({ isLoading: false });

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=97652419e5f4276e5a5fa6f28df39f8c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&&page=` +
        (this.state.currentPage + 1) + `&with_genres=${this.state.selectedGenre}&with_watch_monetization_types=flatrate`
    )
      .then((response) => response.json())
      .then((data) => {
        const nuevosDatos = data.results;
        this.setState({
          datos: this.state.datos.concat(nuevosDatos),
          currentPage: this.state.currentPage + 1,
          isLoading: false,
        });
      })
      .catch(function (error) {
        console.log("Este es el error: " + error);
      });
  };
  select = (event) => {
    this.setState({ selectedGenre: event.target.value });
    console.log(this.selectedGenre);
  };
  
  submit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    console.log('Selected genre:', this.state.selectedGenre);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=97652419e5f4276e5a5fa6f28df39f8c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&&page=1&with_genres=${this.state.selectedGenre}&with_watch_monetization_types=flatrate`
    )
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ datos: data.results });
        this.setState({ isLoading: false });
      })

      .catch(function (error) {
        console.log("Este es el error: " + error);
      });
  };

  render() {
    return (
      <>
        <Header />
        <form onSubmit={this.submit}>
        <label>
          Choose a genre:
          <select value={this.state.selectedGenre} onChange={this.select}>
            <option value="">All genres</option>
            {this.state.genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Filter</button>
      </form>



        {this.state.isLoading ? (
          <div className="loader-container">
            <ClipLoader
              color="#00BFFF"
              loading={this.state.isLoading}
              size={150}
            />
          </div>
        ) : (
          <Box data={this.state.datos} />
        )}
        <button onClick={this.cargarMasDatos} className="moreButton">
          More
        </button>

        <Footer />
      </>
    );
  }
}
