import React from "react";
import VideoBtn from "../video-btn/video-btn";
import MyListBtn from "../my-list-btn/my-list-btn";
import {Link} from "react-router-dom";
import {validFilm} from "../../utils/props";

const MovieCardDescr = (props) => {
  const {film} = props;
  const {name, genre, released, id} = film;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>

      <div className="movie-card__buttons">
        <VideoBtn film={film} />
        <MyListBtn film={film} />
        <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
      </div>
    </div>
  );
};

MovieCardDescr.propTypes = {
  film: validFilm,
};

export default MovieCardDescr;
