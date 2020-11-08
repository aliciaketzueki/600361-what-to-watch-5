import React from "react";
import {connect} from "react-redux";
import {showMore} from "../../store/action";
import {getFilmsByGenre, getRenderedFilms} from "../../store/selectors";
import {validFunc, validNum, validArrayOfShape} from "../../utils/props";

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

ShowMore.propTypes = {
  filmsRendered: validNum,
  films: validArrayOfShape,
  onShowMoreClick: validFunc
};

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
