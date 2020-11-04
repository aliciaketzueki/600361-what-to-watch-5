import React from "react";
import Video from "../video/video";
import withPlayingVideo from "../../hocs/with-playing-video/with-playing-video";
import {validFunc, validOneOfType} from "../../utils/props";

const VideoPlayer = withPlayingVideo(Video);
const Player = (props) => {
  const {onExitBtnClick, video} = props;

  return (
    <VideoPlayer
      onExitBtnClick={onExitBtnClick} video={video}
    />
  );
};

Player.propTypes = {
  onExitBtnClick: validFunc,
  video: validOneOfType
};

export default Player;
