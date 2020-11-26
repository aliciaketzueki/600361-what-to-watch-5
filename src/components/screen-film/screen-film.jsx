import React, {useEffect} from "react";
import BigMovieCard from "../big-movie-card/big-movie-card";
import MoviesList from "../movies-list/movies-list";
import Footer from "../footer/footer";
import {MORE_LIKE_NUM} from "../../utils/const";
import {filterFilms} from "../../utils/utils";
import {getFilms, getFilm, getReviews} from "../../store/selectors";
import {fetchFilm, fetchReviews} from "../../store/actions/api-actions";
import {connect} from "react-redux";

import {validArrayOfShape, validNum, validFunc} from "../../utils/props";
import PropTypes from "prop-types";

const Film = (props) => {
  const {films, filmId, loadCurrentFilm, film, reviews} = props;

  useEffect(() => {
    loadCurrentFilm(filmId, film);
  }, [filmId]);

  if (!film) {
    return null;
  }

  const filmsMoreLike = filterFilms(films, film.genre);

  return (
    <React.Fragment>
      <BigMovieCard
        isFull={true}
        isReview={false}
        film={film}
        reviews={reviews}
      />

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList films={filmsMoreLike} filmsRendered={MORE_LIKE_NUM} />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  films: validArrayOfShape,
  film: PropTypes.shape(),
  reviews: validArrayOfShape,
  filmId: validNum,
  loadCurrentFilm: validFunc,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  film: getFilm(state),
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentFilm(id) {
    dispatch(fetchFilm(id));
    dispatch(fetchReviews(id));
  },
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
