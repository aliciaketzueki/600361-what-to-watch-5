import React from "react";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import ShowMore from "../show-more/show-more";
import {connect} from "react-redux";
import {validArrayOfShape, validNum} from "../../utils/props";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const TabSwitcher = withActiveItem(GenresList);

const MoviesByGenres = (props) => {
  const {films, genres, filmsRendered} = props;

  return (
    <React.Fragment>
      <TabSwitcher genres={genres} />
      <MoviesList films={films} filmsRendered={filmsRendered} />
      <ShowMore />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  films: state.DATA.films,
  filmsRendered: state.PROCESS.filmsRendered,
});

// MoviesByGenres.propTypes = {
//   films: validArrayOfShape,
//   genres: validArrayOfShape,
//   filmsRendered: validNum,
// };

export {MoviesByGenres};
export default connect(mapStateToProps)(MoviesByGenres);
