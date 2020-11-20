import React from "react";
import {validFilm} from "../../utils/props";
import PropTypes from "prop-types";

const MovieCardPoster = (props) => {
  const {film, classname} = props;
  const {name, posterImage} = film;

  return (
    <div className={`movie-card__poster ${classname ? `movie-card__poster--${classname}` : ``}`}>
      <img src={posterImage} alt={name + ` poster`} width="218" height="327" />
    </div>
  );
};

MovieCardPoster.propTypes = {
  film: validFilm,
  classname: PropTypes.string
};

export default MovieCardPoster;
