import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {validFunc, validNum, validArrayOfShape} from "../../utils/props";

const ShowMore = (props) => {
  const {filmsRendered, onShowMoreClick, moviesList} = props;

  return (
    filmsRendered < moviesList.length &&
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
    moviesList: state.moviesList,
    filmsRendered: state.filmsRendered,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick(filmsRendered) {
    dispatch(ActionCreator.showMore(filmsRendered));
  }
});

ShowMore.propTypes = {
  filmsRendered: validNum,
  moviesList: validArrayOfShape,
  onShowMoreClick: validFunc
};

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
