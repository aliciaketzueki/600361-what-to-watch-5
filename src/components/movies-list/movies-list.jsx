import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {connect} from "react-redux";

const MoviesList = (props) => {
  const {moviesList} = props;

  return (
    <div className="catalog__movies-list">
      {
        moviesList.map((film, index) => (
          <SmallMovieCard key={`${film}-${index}`} film={film} />
        ))
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moviesList: state.moviesList,
  };
};

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
