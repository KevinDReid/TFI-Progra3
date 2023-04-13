import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const nav = [
  {
    nombre: "Home",
    path: "/",
  },
  {
    nombre: "All",
    path: "/all",
  },
  {
    nombre: "Favorites",
    path: "/favorites",
  },
];

export default class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <img className="logo" src="./img/logo.png" alt="" />
          </li>
        </ul>
        <ul className="main-nav">
          {nav.map((nav, idx) => (
            <li key={nav + idx}>
              <Link to={nav.path}>{nav.nombre}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
