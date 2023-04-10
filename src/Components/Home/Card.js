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
    console.log(this.state);
    return (
      <li className="movieContainer" key={this.state.key}>
        <article className="movieLink">
          <img className="movieImg" src={this.props.img} alt="asd" />

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
