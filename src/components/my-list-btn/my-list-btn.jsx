import React from "react";
import {validShape} from "../../utils/props";

const MyListBtn = (props) => {
  const {history} = props;

  const onMyListBtnClick = () => {
    history.push(`/my-list`);
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={onMyListBtnClick} >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add" />
      </svg>
      <span>My list</span>
    </button>
  );
};

MyListBtn.propTypes = {
  history: validShape,
};

export default MyListBtn;
