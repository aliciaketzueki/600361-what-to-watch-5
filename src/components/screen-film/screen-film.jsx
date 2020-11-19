import React, {useEffect} from "react";
import MoviesList from "../movies-list/movies-list";
import Footer from "../footer/footer";
import {MORE_LIKE_NUM} from "../../utils/const";
import {getFilms, getFilm, getReviews} from "../../store/selectors";
import {fetchFilm, fetchReviews} from "../../store/actions/api-actions";
import {connect} from "react-redux";
import BigMovieCard from "../big-movie-card/big-movie-card";

const Film = (props) => {
  const {films, history, match, loadCurrentFilm, film, reviews} = props;
  const filmId = match.params.id;

  useEffect(() => {
    loadCurrentFilm(filmId);
    console.log(`use effect`);
  }, [filmId]);

  if (!film) {
    return null;
  }

  console.log(`film FilmScreen`, film);
  // const filmsMoreLike = films.filter((it) => it.genre === film.genre);
  const filmsMoreLike = films;

  return (
    <React.Fragment>
      <BigMovieCard
        history={history}
        isFull={true}
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
  reviews: getReviews(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentFilm(id) {
    dispatch(fetchFilm(id));
    dispatch(fetchReviews(id));
  },
});

// Film.propTypes = {
//   films: validArrayOfShape,
//   reviews: validArrayOfShape,
//   history: validShape,
// };

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
