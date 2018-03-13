import React from "react";
import "./Suggestions.css";
import logo from "./header/tmdb_logo.jpg";
// setup Suggestions to expect a prop named results.
const Suggestions = props => {
  const options = props.results.map((r, i) => {
    return (
      <ul key={i}>
        <object
          className="titleImage"
          data={`http://image.tmdb.org/t/p/w500${r.poster_path}`}
        >
          <img src={logo} alt="No Image To Display!" />
        </object>
        <div className="result-container">
          <li className="title">{r.title}</li>

          <li className="releasedate"> Release Date: {r.release_date}</li>
          <li className="overview">Overview: {r.overview}</li>
          {/* <li className="castmembers"> Cast: {r.data.data.casts}</li> */}
        </div>
      </ul>
    );
  });
  console.log("options: ", options);

  return <div className="listDisplay">{options}</div>;
};

export default Suggestions;
