import React from "react";
import VideoBtn from "../video-btn/video-btn";
import MyListBtn from "../my-list-btn/my-list-btn";
import {Link} from "react-router-dom";

const MovieCardDescr = (props) => {
  const {film, history} = props;
  const {name, genre, released, id} = film;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>

      <div className="movie-card__buttons">
        <VideoBtn history={history} />
        <MyListBtn />
        <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
      </div>
    </div>
  );
};

export default MovieCardDescr;
