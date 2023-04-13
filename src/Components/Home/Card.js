import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.key,
      id: this.props.id,
      name: this.props.name,
      img: this.props.img,
      desc: this.props.desc,
      text: "Ver mas",
      class: "hidden",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id || prevProps.name !== this.props.name || prevProps.img !== this.props.img || prevProps.desc !== this.props.desc) {
      this.setState({
        key: this.props.key,
        id: this.props.id,
        name: this.props.name,
        img: this.props.img,
        desc: this.props.desc,
      });
      console.log(this.props);
    }
  }
  changeText() {
    if (this.state.text === "Ver mas") {
      this.setState({
        text: "Ver menos",
        class: "show",
      });
    } else {
      this.setState({
        text: "Ver mas",
        class: "hidden",
      });
    }
  }

  render() {
    return (
      
      <li className="movieContainer" key={this.state.key}>
        <article className="movieLink">
          <img className="movieImg" src={this.state.img ? "https://image.tmdb.org/t/p/original" +this.state.img : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="asd" />

          <div className="movieText">
            <h4 className="movieTitle">{this.state.name}</h4>
            <p className={this.state.class}>{this.state.desc}</p>
          </div>
          <div className="movieButtons">
            <button>Agregar a favoritos</button>
            <button
              onClick={() =>
                (window.location.href = "detail/id/" + this.state.id)
              }
            >
              Detalle
            </button>
            <button onClick={() => this.changeText()}>{this.state.text}</button>
          </div>
        </article>
      </li>
    );
  }
}
