import React, { Component } from "react";
import logo from "./tmdb_logo.jpg";
import logo2 from "./tmdb_logo.png";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a href="https://www.themoviedb.org">
            <img
              className="logoResize"
              alt="tmdb.org - api source"
              src={logo2}
            />
          </a>
          <h1>The Movie Database </h1>
          <p />
        </header>
      </div>
    );
  }
}
