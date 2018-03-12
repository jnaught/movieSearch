import React, { Component } from "react";
import "./apicaller.css";
// import axios from "axios";

export default class apiCaller extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      searchMovie: "",
      movies: []
    };
  }

  render() {
    return (
      <div className="container">
        <input
          className="inputLine"
          placeholder="Search Movies"
          onChange={event => {
            this.setState({ searchMovie: event.target.value });
          }}
        />
        <button
          className="button"
          onClick={() => this.props.getData(this.state.searchMovie)}
        >
          Search Movies
        </button>
        <h3> {this.state.movie} </h3>
      </div>
    );
  }
}
