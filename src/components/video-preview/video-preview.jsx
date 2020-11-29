import React from "react";
import {validLoadedFilm, validOneOfType} from "../../utils/props";
import {convertFilmProps} from "../../utils/utils";

const VideoPreview = (props) => {
  const {film, video} = props;
  const {previewImage, previewVideoLink} = convertFilmProps(film);

  return (
    <React.Fragment>
      <video
        ref={video}
        width="280"
        height="175"
        poster={previewImage}
        preload="auto"
        muted
        playsInline
        src={previewVideoLink}
      />
    </React.Fragment>
  );
};

VideoPreview.propTypes = {
  film: validLoadedFilm,
  video: validOneOfType
};

export default VideoPreview;
