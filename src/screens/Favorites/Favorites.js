import React, { Component } from "react";
import { ClipLoader } from "react-spinners";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Home/Card";
import "./style.css";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      data: [],
    };
  }

  componentDidMount() {
    let storage = localStorage.getItem("favorites");
    if (storage !== null) {
      let storageToArray = JSON.parse(storage);
      Promise.all(
        storageToArray.map((id) => {
          return fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=97652419e5f4276e5a5fa6f28df39f8c`
          )
            .then((resp) => resp.json())
            .then((data) => data);
        })
      )
        .then((data) => {
          console.log(data);
          this.setState({
            data: data,
          });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.state.isLoading ? (
          <div className="loader-container">
            <ClipLoader
              color="#00BFFF"
              loading={this.state.isLoading}
              size={150}
            />
          </div>
        ) : this.state.data.length > 0 ? (
          this.state.data.map((el, idx) => {
            console.log(el);
            return (
              <Card
                key={el + idx}
                id={el.id}
                name={el.title || el.name}
                img={el.poster_path}
                desc={el.overview}
                text={"More"}
                class={"hidden"}
              />
            );
          })
        ) : (
          <h2 className="empty">Favorites is empty</h2>
        )}
        <Footer />
      </>
    );
  }
}

export default Favorites;
