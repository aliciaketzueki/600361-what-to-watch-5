import React from "react";
import PropTypes from "prop-types";

const MyListBtn = (props) => {
  const {history} = props;

  const onMyListBtnClick = () => {
    history.push(`/my-list`);
  };

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={onMyListBtnClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
};

export default MyListBtn;

MyListBtn.propTypes = {
  history: PropTypes.shape().isRequired,
};
