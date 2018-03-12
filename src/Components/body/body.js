import React, { Component } from "react";
import "./body.css";
// import axios from "axios";
import YouTube from "react-youtube";

export default class body extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { movie } = this.props;
    const opts = {
      height: "225",
      width: "350"
    };
    // console.log(movie)

    if (movie) {
      return (
        <div className="container">
          <div className="results">
            <div className="display-info">
              <div className="display-header">
                <p className="p-style">Title: {movie.title} </p>
                <br />
              </div>
              {/* image: {movie.images} */}
              <br />
              <div className="poster">
                {movie.images && (
                  <img
                    src={`http://image.tmdb.org/t/p/w342/${
                      movie.images.posters[0].file_path
                    } `}
                    alt=""
                  />
                )}
              </div>
              <p className="p-style">Overview:</p> <br />
              {movie.overview}
            </div>

            <div className="right-column">
              <div className="display-overview">
                <div>
                  <p className="p-style">Movie Rating: {movie.vote_average}</p>

                  <p className="p-style"> Actor / Character</p>
                  {movie.casts &&
                    movie.casts.cast.map(x => {
                      return (
                        <div>
                          <p>
                            {x.name}: {x.character}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="display-video">
                <div>
                  <p className="p-style"> Trailers: </p>
                </div>
                <div className="video">
                  <div className="youtube">
                    {movie.videos ? (
                      <YouTube
                        videoId={movie.videos.results[0].key}
                        opts={opts}
                        onReady={this._onReady}
                      />
                    ) : null}
                  </div>
                  {/* {console.log(movie.videos)}  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else return <div>No Movie Seleceted!!</div>;
  }
}
