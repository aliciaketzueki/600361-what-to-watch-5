import React from "react";
import {validNum, validFunc} from "../../utils/props";
import {connect} from "react-redux";
import {addToMyList} from "../../store/action";

const MyListBtn = (props) => {
  const {onMyListBtnClick, curFilmId} = props;

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onMyListBtnClick(curFilmId);
      }}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add" />
      </svg>
      <span>My list</span>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onMyListBtnClick(filmId) {
    dispatch(addToMyList(filmId));
  }
});

MyListBtn.propTypes = {
  onMyListBtnClick: validFunc,
  curFilmId: validNum
};

export {MyListBtn};
export default connect(null, mapDispatchToProps)(MyListBtn);
