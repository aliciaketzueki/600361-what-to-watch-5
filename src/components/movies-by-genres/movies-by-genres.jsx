import React from "react";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import ShowMore from "../show-more/show-more";
import {connect} from "react-redux";
import {validArrayOfShape, validNum} from "../../utils/props";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const TabSwitcher = withActiveItem(GenresList);

const MoviesByGenres = (props) => {
  const {moviesList, genres, filmsRendered} = props;

  return (
    <React.Fragment>
      <TabSwitcher genres={genres} />
      <MoviesList moviesList={moviesList} filmsRendered={filmsRendered} />
      <ShowMore />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
  filmsRendered: state.filmsRendered,
});

MoviesByGenres.propTypes = {
  moviesList: validArrayOfShape,
  genres: validArrayOfShape,
  filmsRendered: validNum,
};

export {MoviesByGenres};
export default connect(mapStateToProps)(MoviesByGenres);
