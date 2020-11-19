import React, {useEffect} from "react";
import MoviesList from "../movies-list/movies-list";
import Footer from "../footer/footer";
import {MORE_LIKE_NUM} from "../../utils/const";
import {getFilms, getFilm, getReviews} from "../../store/selectors";
import {fetchFilm, fetchReviews} from "../../store/actions/api-actions";
import {changeActiveFilm} from "../../store/actions/action";
import {connect} from "react-redux";
import BigMovieCard from "../big-movie-card/big-movie-card";

const Film = (props) => {
  const {films, history, match, loadCurrentFilm, film, reviews, isLoad} = props;
  const filmId = match.params.id;

  useEffect(() => {
    loadCurrentFilm(filmId, film);
  }, [filmId, film]);

  if (!film) {
    return null;
  }

  const filmsMoreLike = films.filter((it) => it.genre === film.genre);

  return (
    <React.Fragment>
      <BigMovieCard
        history={history}
        film={film}
        reviews={reviews}
      />

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList
            films={filmsMoreLike}
            filmsRendered={MORE_LIKE_NUM}
          />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  film: getFilm(state),
  reviews: getReviews(state),
  isLoadedFilm: state.DATA.isLoadedFilm
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentFilm(id, film) {
    dispatch(fetchFilm(id));
    dispatch(fetchReviews(id));
    dispatch(changeActiveFilm(film));
  },
});

// Film.propTypes = {
//   films: validArrayOfShape,
//   reviews: validArrayOfShape,
//   history: validShape,
// };

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
