import React from "react";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import ShowMore from "../show-more/show-more";
import {connect} from "react-redux";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {getFilmsByGenre, getGenres, getFilmsRendered} from "../../store/selectors";
import {validArrayOfShape, validNum, validArrayOfString} from "../../utils/props";
const TabSwitcher = withActiveItem(GenresList);

const MoviesByGenres = (props) => {
  const {films, genres, filmsRendered, loading} = props;

  console.log(loading)

  if (loading) {
    return <div>loading...</div>
  }
  return (
    <React.Fragment>
      <TabSwitcher genres={genres} />
      <MoviesList films={films} filmsRendered={filmsRendered} />
      <ShowMore />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state),
  loading: state.DATA.loading,
  genres: getGenres(state),
  filmsRendered: getFilmsRendered(state)
});

MoviesByGenres.propTypes = {
  films: validArrayOfShape,
  genres: validArrayOfString,
  filmsRendered: validNum,
};

export {MoviesByGenres};
export default connect(mapStateToProps)(MoviesByGenres);
