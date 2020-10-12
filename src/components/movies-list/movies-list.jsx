import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";

const MoviesList = (props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {
        films.map((film, index) => (
          <SmallMovieCard key={`${film}-${index}`} film={film} />
        ))
      }
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default MoviesList;
