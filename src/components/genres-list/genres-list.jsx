import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {changeGenre} from "../../store/actions/action";
import {getGenres, getActiveGenre} from "../../store/selectors";
import {MAX_GENRES_NUM} from "../../utils/const";
import {validArrayOfString, validFunc, validString} from "../../utils/props";

const GenresList = (props) => {
  const {genres, onGenreClick, onClick, activeGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {
        genres.slice(0, MAX_GENRES_NUM).map((genre, index) => (
          <li key={`${genre}-${index}`} className={genre === activeGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
            <Link
              to="/"
              className="catalog__genres-link"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onGenreClick(genre);
                onClick(index);
              }}
            >
              {genre}
            </Link>
          </li>
        ))
      }
    </ul>
  );
};

GenresList.propTypes = {
  genres: validArrayOfString,
  activeGenre: validString,
  onGenreClick: validFunc,
  onClick: validFunc
};

const mapStateToProps = (state) => ({
  activeGenre: getActiveGenre(state),
  genres: getGenres(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(activeGenre) {
    dispatch(changeGenre(activeGenre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
