import React from "react";
import {validShape, validOneOfType} from "../../utils/props";

const VideoPreview = (props) => {
  const {film, video} = props;
  const {preview_image, preview_video_link} = film;

  return (
    <React.Fragment>
      <video
        ref={video}
        width="280"
        height="175"
        poster={preview_image}
        preload="auto"
        muted
        playsInline
        src={preview_video_link}
      />
    </React.Fragment>
  );
};

VideoPreview.propTypes = {
  film: validShape,
  video: validOneOfType
};

export default VideoPreview;
