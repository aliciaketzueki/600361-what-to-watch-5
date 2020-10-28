import React from "react";
import {validShape} from "../../utils/props";

const VideoBtn = (props) => {
  const {history} = props;

  const onVideoBtnClick = () => {
    history.push(`/player/:id`);
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

VideoBtn.propTypes = {
  history: validShape
};

export default VideoBtn;
