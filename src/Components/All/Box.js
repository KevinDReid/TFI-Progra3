import React, { Component } from "react";
import Info from "./Info";
export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ data: this.props.data });
    }
  }

  render() {
    {
      /* <li className="movieContainer" >  */
    }

    return (
      <section className="secContainer">
        {this.state.data.map((el, idx) => (
          <Info
            key={el + idx}
            mKey={el + idx}
            id={el.id}
            name={el.title || el.name}
            img={"https://image.tmdb.org/t/p/original" + el.poster_path}
            desc={el.overview}
          />
        ))}
      </section>
    );
    //   <article className="card" key={this.state.key}>
  }
}
