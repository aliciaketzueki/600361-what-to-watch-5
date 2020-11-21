import React from "react";
import {connect} from "react-redux";
import {validFilm} from "../../utils/props";
import {APIRoute} from "../../utils/const";
import {redirectToRoute} from "../../store/actions/action";

const VideoBtn = (props) => {
  const {film, moveToPage} = props;
  const {id} = film;

  const onVideoBtnClick = () => {
    moveToPage(`${APIRoute.PLAYER}/${id}`);
  };

  return (
    <button className="btn btn--play movie-card__button" type="button" onClick={onVideoBtnClick}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  moveToPage(route) {
    dispatch(redirectToRoute(route))
  }
});

VideoBtn.propTypes = {
  film: validFilm
};

export {VideoBtn};
export default connect(null, mapDispatchToProps)(VideoBtn);
