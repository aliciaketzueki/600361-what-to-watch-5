import React from "react";
import Header from "../header/header";
import {validFilm, validShape} from "../../utils/props";
import PropTypes from "prop-types";

const MovieCardHead = (props) => {
  const {film, headerNav} = props;
  const {name, backgroundImage} = film;

  return (
    <React.Fragment>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header
        header={{
          headClass: `movie-card__head`,
          nav: headerNav
        }}
        film={film}
      />
    </React.Fragment>
  );
};

MovieCardHead.propTypes = {
  film: validFilm,
  headerNav: PropTypes.bool
};

export default MovieCardHead;
