import React from "react";
import {validFilm} from "../../utils/props";
import {MAX_ACTORS_NUM} from "../../utils/const";

const TabOverview = (props) => {
  const {film} = props;
  const {rating, description, scoresCount, director, starring} = film;

  const addRating = () => {
    switch (true) {
      case rating < 3:
        return `Bad`;
      case rating < 5:
        return `Normal`;
      case rating < 8:
        return `Good`;
      case rating < 10:
        return `Very good`;
      case rating === 10:
        return `Awesome`;
      default:
        return false;
    }
  };

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">
            {addRating()}
          </span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring:&nbsp;
          {starring.slice(0, MAX_ACTORS_NUM).join(`, `)}
          &nbsp;and other</strong></p>
      </div>
    </React.Fragment>
  );
};

TabOverview.propTypes = {
  film: validFilm,
};

export default TabOverview;
