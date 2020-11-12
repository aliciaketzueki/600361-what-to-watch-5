import React from "react";
import Header from "../header/header";

const MovieCardHead = (props) => {
  const {film, history} = props;
  const {name, backgroundImage} = film;

  return (
    <React.Fragment>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header
        header={{
          headClass: `movie-card__head`,
        }}
        history={history}
      />
    </React.Fragment>
  );
};

export default MovieCardHead;
