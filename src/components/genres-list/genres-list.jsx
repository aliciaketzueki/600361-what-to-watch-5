import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action"

const GenresList = (props) => {
  const {genres, activeGenre, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre, index) => (
          <li key={`${genre}-${index}`} className={genre.name === activeGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onGenreClick(e);
              }}
            >
              {genre.name}
            </a>
          </li>
        ))
      }
  </ul>
  )
};

const mapStateToProps = (state) => ({
  moviesList: state.movies_list,
  activeGenre: state.active_genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(activeGenre) {
    dispatch(ActionCreator.changeGenre(activeGenre));
    // dispatch(ActionCreator.getMoviesList(activeGenre));
  }
});


export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
