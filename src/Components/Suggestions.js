import React from "react";
import "./Suggestions.css";
import logo from "./header/tmdb_logo.jpg";
// setup Suggestions to expect a prop named results.
const Suggestions = props => {
  const options = props.results.map((r, i) => {
    // console.log("Suggested Results: ", props.results);
    const bgimage = `http://image.tmdb.org/t/p/w342${r.backdrop_path}`;
    return (
      <ul
        key={i}
        className="listBG"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <object data={`http://image.tmdb.org/t/p/w342${r.poster_path}`}>
          <img src={logo} alt="No Image To Display!" />
          No Poster to Display!
        </object>
        <div className="result-container">
          <li className="title">{r.title}</li>

          <li className="releasedate"> Release Date: {r.release_date}</li>
          <li className="overview">Overview: {r.overview}</li>
        </div>
      </ul>
    );
  });
  console.log("options: ", options);

  return <div className="listDisplay">{options}</div>;
};

export default Suggestions;
