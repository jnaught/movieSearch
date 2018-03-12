// render our Suggestions component:

import React, { Component } from "react";
import axios from "axios";
import Suggestions from "./Suggestions.js";

const apiKey = "6df6089b2a738b7b648085d1543a67df";
const API_URL = "https://api.themoviedb.org/3/search/movie";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: []
    };
  }

  getInfo = () => {
    axios
      .get(`${API_URL}?api_key=${apiKey}&query=${this.state.query}`)
      .then(response => {
        this.setState({
          results: response.data.results
        });

        console.log("search query: ", this.state.query);
      });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    console.log("search results: ", this.state.results);

    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;
