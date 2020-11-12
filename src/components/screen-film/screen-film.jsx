import React from "react";
import MoviesList from "../movies-list/movies-list";
import Footer from "../footer/footer";
import {MORE_LIKE_NUM} from "../../utils/const";
import {getFilms, getReviews} from "../../store/selectors";
import {connect} from "react-redux";
import BigMovieCard from "../big-movie-card/big-movie-card";

const Film = (props) => {
  const {films, reviews, history, match, film} = props;

  const filmsMoreLike = films.filter((it) => it.genre === film.genre);

  return (
    <React.Fragment>
      <BigMovieCard
        reviews={reviews}
        history={history}
        match={match}
        isFull={true}
        film={film}
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
  reviews: getReviews(state),
  film: state.DATA.film
});

// Film.propTypes = {
//   films: validArrayOfShape,
//   reviews: validArrayOfShape,
//   history: validShape,
// };

export {Film};
export default connect(mapStateToProps)(Film);
