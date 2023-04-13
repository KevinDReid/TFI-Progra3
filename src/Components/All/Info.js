import React, { Component } from "react";
import "./style.css";
export default class Info extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      // key: this.props.key,
      mKey: this.props.mKey,
      id: this.props.id,
      name: this.props.name,
      img: this.props.img,
      desc: this.props.desc,
      text: "Ver mas",
      class: "hidden",
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.mKey !== this.props.mKey) {
      this.setState({ mKey: this.props.mKey });
    }
    if (prevProps.id !== this.props.id) {
      this.setState({ id: this.props.id });
    }
    if (prevProps.name !== this.props.name) {
      this.setState({ name: this.props.name });
    }
    if (prevProps.img !== this.props.img) {
      this.setState({ img: this.props.img });
    }
    if (prevProps.desc !== this.props.desc) {
      this.setState({ desc: this.props.desc });
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
    {
      /* <li className="movieContainer" >  */
    }
    return (
      //   <article className="card" key={this.state.key}>
      <article className="movieCard" key={this.state.mKey}>
        <img className="cardImg" src={this.props.img} alt="asd" />

        <h4 className="cardTitle">{this.state.name}</h4>
        <p className={this.state.class}>{this.state.desc}</p>
        <div className="movieButtons cardButtons">
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
        {/* </article> */}
      </article>
    );
  }
}
