import React from "react";
import {Link} from "react-router-dom";
import MoviesList from "../movies-list/movies-list";
import Header from "../header/header";
import Footer from "../footer/footer";
import VideoBtn from "../video-btn/video-btn";
import MyListBtn from "../my-list-btn/my-list-btn";
import {validShape, validArrayOfShape} from "../../utils/props";
import {MORE_LIKE_NUM, APIRoute} from "../../utils/const";
import {convertFilmProps, selectFilm} from "../../utils/utils";
import {getFilms, getReviews} from "../../store/selectors";
import {fetchFilm} from "../../store/actions/api-actions";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import Tabs from "../tabs/tabs";
import {connect} from "react-redux";
const TabSwitcher = withActiveItem(Tabs);

const Film = (props) => {
  const {films, reviews, history, match} = props;

  // Куда эти функции можно вынести, чтоб они были не здесь?
  const filmId = parseInt(match.url.replace(`${APIRoute.FILMS}/`, ``));
  const film = convertFilmProps(selectFilm(films, filmId));

  const {name, genre, released, backgroundImage, posterImage} = film;
  const filmsMoreLike = films.filter((film) => film.genre === genre);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header
            header={{
              headClass: `movie-card__head`,
            }}
            history={history}
          />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <VideoBtn history={history} />
                <MyListBtn />
                <Link to="/films/:id/review" className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <TabSwitcher reviews={reviews} film={film} />
          </div>
        </div>
      </section>

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

const mapStateToProps = (state) => ({
  films: getFilms(state),
  reviews: getReviews(state),
});

Film.propTypes = {
  films: validArrayOfShape,
  reviews: validArrayOfShape,
  history: validShape,
};

export {Film};
export default connect(mapStateToProps)(Film);
