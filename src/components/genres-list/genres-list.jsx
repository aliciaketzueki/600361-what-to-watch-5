import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {validArrayOfShape, validFunc, validNum} from "../../utils/props";

const GenresList = (props) => {
  const {genres, activeGenre, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li key={`${genre.name}-${genre.id}`} className={genre.id === activeGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
            <Link
              to="#"
              className="catalog__genres-link"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onGenreClick(genre.id);
              }}
            >
              {genre.name}
            </Link>
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
  genres: validArrayOfShape,
  activeGenre: validNum,
  onGenreClick: validFunc
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
