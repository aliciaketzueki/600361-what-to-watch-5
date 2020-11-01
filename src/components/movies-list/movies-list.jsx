import React from "react";
import {validArrayOfShape, validNum} from "../../utils/props";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import withHoverMovieCard from "../../hocs/with-hover-movie-card";
const SmallMovieCardWrapper = withHoverMovieCard(SmallMovieCard);

const MoviesList = (props) => {
  const {moviesList, filmsRendered} = props;

  return (
    <div className="catalog__movies-list">
      {
        moviesList.map((film, index) => (
          index < filmsRendered &&
          <SmallMovieCardWrapper key={`${film.name}-${film.id}`} film={film} />
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
