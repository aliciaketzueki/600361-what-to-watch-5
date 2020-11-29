import React from "react";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import ShowMore from "../show-more/show-more";
import {connect} from "react-redux";
import {getFilmsByGenre, getGenres, getFilmsRendered} from "../../store/selectors";
import {validNum, validArrayOfString, validFilms} from "../../utils/props";

const MoviesByGenres = (props) => {
  const {films, genres, filmsRendered} = props;

  return (
    <React.Fragment>
      <GenresList genres={genres} />
      <MoviesList films={films} filmsRendered={filmsRendered} />
      <ShowMore />
    </React.Fragment>
  );
};

MoviesByGenres.propTypes = {
  films: validFilms,
  genres: validArrayOfString,
  filmsRendered: validNum,
};

const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state),
  genres: getGenres(state),
  filmsRendered: getFilmsRendered(state)
});

export {MoviesByGenres};
export default connect(mapStateToProps)(MoviesByGenres);
