import React from "react";
import PropTypes from "prop-types";

const Video = (props) => {
  const {film, video} = props;
  const {poster, src} = film;

  // console.log(`video state`, state);

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
  film: PropTypes.shape().isRequired,
  video: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any})
  ])
};

export default Video;
