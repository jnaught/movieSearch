import React, { Component } from "react";
// import logo from "./tmdb_logo.jpg";
// import logo2 from "./tmdb_logo.png";
import "./App.css";
// import ApiCaller from "./Components/apicaller/apicaller";
import Body from "./Components/body/body";
import axios from "axios";
import Header from "./Components/header/header.js";
import Search from "./Components/search.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {}
    };
    this.getData = this.getData.bind(this);
  }

  getData(searchMovie) {
    axios
      .post("/api/getData", { searchMovie })
      .then(response => {
        console.log(response.data);
        return this.setState({ movie: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>The Movie Database </h1>
          <p>
            <a href="https://www.themoviedb.org">
              <img
                className="logoResize"
                alt="tmdb.org - api source"
                src={logo2}
              />
            </a>
          </p>
        </header> */}
        <p className="App-intro" />

        {/* <div>
          <ApiCaller getData={this.getData} />
        </div> */}
        <div>
          <Search />
          {/* <Body movie={this.state.movie} /> */}
        </div>
      </div>
    );
  }
}

export default App;
