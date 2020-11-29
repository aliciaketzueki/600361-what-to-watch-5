import React from "react";
import {connect} from "react-redux";
import {showMore} from "../../store/actions/action";
import {getFilmsByGenre, getRenderedFilms} from "../../store/selectors";
import {validFunc, validNum, validFilms} from "../../utils/props";

const ShowMore = (props) => {
  const {filmsRendered, onShowMoreClick, films} = props;

  return (
    filmsRendered < films.length &&
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          onShowMoreClick(filmsRendered);
        }}
      >
        Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  filmsRendered: validNum,
  films: validFilms,
  onShowMoreClick: validFunc
};

const mapStateToProps = (state) => {
  return {
    films: getFilmsByGenre(state),
    filmsRendered: getRenderedFilms(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick(filmsRendered) {
    dispatch(showMore(filmsRendered));
  }
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
