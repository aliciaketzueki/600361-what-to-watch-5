import React from "react";
import {Link} from "react-router-dom";
import MoviesList from "../movies-list/movies-list";
import Header from "../header/header";
import Footer from "../footer/footer";
import VideoBtn from "../video-btn/video-btn";
import MyListBtn from "../my-list-btn/my-list-btn";
import {validShape, validArrayOfShape, validPromoFilm} from "../../utils/props";
import {MORE_LIKE_NUM} from "../../utils/const";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import Tabs from "../tabs/tabs";

const TabSwitcher = withActiveItem(Tabs);

const Film = (props) => {
  const {films, reviews, header, history, promoFilm, tabs} = props;

  const genreId = 4;
  const filmsMoreLike = films.filter((film) => film.genreId === genreId);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={`img/${promoFilm.bg}`} alt={promoFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header header={header} history={history} />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.year}</span>
              </p>

              <div className="movie-card__buttons">
                <VideoBtn history={history} />
                <MyListBtn curFilmId={15} />
                <Link to="/films/:id/review" className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt={promoFilm.name} width="218" height="327" />
            </div>

            <TabSwitcher tabs={tabs} reviews={reviews} promoFilm={promoFilm} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList moviesList={filmsMoreLike} filmsRendered={MORE_LIKE_NUM} />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  promoFilm: validPromoFilm,
  films: validArrayOfShape,
  reviews: validArrayOfShape,
  header: validShape,
  history: validShape,
  tabs: validArrayOfShape
};

export default Film;
