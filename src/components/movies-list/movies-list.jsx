import React from "react";
import {validFilms, validNum} from "../../utils/props";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import withHoverMovieCard from "../../hocs/with-hover-movie-card/with-hover-movie-card";
const SmallMovieCardWrapper = withHoverMovieCard(SmallMovieCard);

const MoviesList = (props) => {
  const {films, filmsRendered} = props;

  return (
    <div className="catalog__movies-list">
      {
        films.map((film, index) => (
          index < filmsRendered &&
          <SmallMovieCardWrapper key={`${film.name}-${film.id}`} film={film} />
        ))
      }
    </div>
  );
};

MoviesList.propTypes = {
  films: validFilms,
  filmsRendered: validNum
};

export default MoviesList;
