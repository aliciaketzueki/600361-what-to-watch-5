import React from "react";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {validArrayOfShape, validNum} from "../../utils/props";

const MoviesList = (props) => {
  const {moviesList, filmsRendered} = props;

  return (
    <div className="catalog__movies-list">
      {
        moviesList.map((film, index) => (
          index < filmsRendered &&
          <SmallMovieCard key={`${film}-${index}`} film={film} />
        ))
      }
    </div>
  );
};

MoviesList.propTypes = {
  moviesList: validArrayOfShape,
  filmsRendered: validNum
};

export default MoviesList;
