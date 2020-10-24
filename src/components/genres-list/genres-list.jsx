import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

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
                onGenreClick(genre.name);
              }}
            >
              {genre.name}
            </a>
          </li>
        ))
      }
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    activeGenre: state.activeGenre,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(activeGenre) {
    dispatch(ActionCreator.changeGenre(activeGenre));
  }
});

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
