import React from "react";
import {validShape, validOneOfType} from "../../utils/props";

const Video = (props) => {
  const {film, video} = props;
  const {poster, src} = film;

  return (
    <React.Fragment>
      <video
        ref={video}
        width="280"
        height="175"
        poster={`img/` + poster}
        preload="auto"
        muted
        playsInline
        src={src}
      />
    </React.Fragment>
  );
};

Video.propTypes = {
  film: validShape,
  video: validOneOfType
};

export default Video;
