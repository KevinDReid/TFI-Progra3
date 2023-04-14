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
      text: "More",
      class: "hidden",
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
    let storageArray = JSON.parse(storage);
    let filter = storageArray.filter((elm) => elm !== id);
    let filterToString = JSON.stringify(filter);
    localStorage.setItem("favorites", filterToString);

    this.setState({
      favorite: false,
    });
    console.log(this.state.favorite);
  }

  changeText() {
    if (this.state.text === "More") {
      this.setState({
        text: "Less",
        class: "show",
      });
    } else {
      this.setState({
        text: "More",
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
          {localStorage.getItem("favorites") != null &&
          localStorage.getItem("favorites").includes(this.state.id) ? (
            <button onClick={() => this.removeFromFav(this.state.id)}>
              {" "}
              Remove
            </button>
          ) : (
            <button onClick={() => this.addFav(this.state.id)}>Add</button>
          )}{" "}
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
