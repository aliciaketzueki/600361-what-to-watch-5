import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {validArrayOfShape, validFunc, validNum} from "../../utils/props";

const GenresList = (props) => {
  const {genres, onGenreClick, onClick, tabIndex} = props;

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre, index) => (
          <li key={`${genre.name}-${genre.id}`} className={genre.id === tabIndex ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
            <Link
              to="/"
              className="catalog__genres-link"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onGenreClick(genre.id);
                onClick(index);
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

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(tabIndex) {
    dispatch(ActionCreator.changeGenre(tabIndex));
  }
});

GenresList.propTypes = {
  genres: validArrayOfShape,
  tabIndex: validNum,
  onGenreClick: validFunc,
  onClick: validFunc
};

export {GenresList};
export default connect(null, mapDispatchToProps)(GenresList);
