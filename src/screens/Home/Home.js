import React, { Component } from "react";
import { ClipLoader } from "react-spinners";

import Header from "../../Components/Header/Header";
import MovieList from "../../Components/Home/MovieList";
import Footer from "../../Components/Footer/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosPop: [],
      datosTop: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=97652419e5f4276e5a5fa6f28df39f8c"
    )
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.setState({ datosPop: data.results.slice(0, 5) });
        // console.log(this.state.datos);
      })
      .catch(function (error) {
        console.log("Este es el error: " + error);
      });
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=97652419e5f4276e5a5fa6f28df39f8c"
    )
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.setState({ datosTop: data.results.slice(0, 5) });
        // console.log(this.state.datos);
        this.setState({ isLoading: false });
      })

      .catch(function (error) {
        console.log("Este es el error: " + error);
      });
  }
  render() {
    // console.log(this.state.datos);
    return (
      <>
        <Header />
        <main>
          {this.state.isLoading ? (
            <div className="loader-container">
              <ClipLoader
                color="#00BFFF"
                loading={this.state.isLoading}
                size={150}
              />
            </div>
          ) : (
            <MovieList
              datosPop={this.state.datosPop}
              datosTop={this.state.datosTop}
            />
          )}
        </main>
        <Footer />
      </>
    );
  }
}
