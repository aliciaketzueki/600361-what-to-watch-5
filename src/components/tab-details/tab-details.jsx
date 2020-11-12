import React from "react";
import {validFilm} from "../../utils/props";

const TabDetails = (props) => {
  const {film} = props;
  const {director, starring, runTime, id} = film;

  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {
                starring.map((actor, index, arr) => {
                  if (index < arr.length - 1) {
                    return <React.Fragment key={`${actor}-${id}`}>{actor}, <br /></React.Fragment>;
                  } else {
                    return actor;
                  }
                })
              }
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{`${Math.floor(runTime / 60)}h ${runTime % 60}m`}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">Comedy</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">2014</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

TabDetails.propTypes = {
  film: validFilm
};

export default TabDetails;
