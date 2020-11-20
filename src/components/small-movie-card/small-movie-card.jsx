import React from "react";
import {Link} from "react-router-dom";
import VideoPreview from "../video-preview/video-preview";
import {validShape, validFunc, validOneOfType} from "../../utils/props";

const SmallMovieCard = (props) => {
  const {film, onMouseEnter, onMouseLeave, video} = props;
  const {name, id} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoPreview film={film} video={video} />
      </div>
      <h3 className="small-movie-card__title">
        <Link
          to={`/films/${id}`}
          className="small-movie-card__link"
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: validShape,
  video: validOneOfType,
  onMouseEnter: validFunc,
  onMouseLeave: validFunc,
};

export default SmallMovieCard;
