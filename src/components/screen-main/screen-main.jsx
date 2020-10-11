import React from "react";
import PropTypes from "prop-types";

import Header from "../header/header";
import Footer from "../footer/footer";
import VideoBtn from "../video-btn/video-btn";
import MyListBtn from "../my-list-btn/my-list-btn";
import MoviesList from "../movies-list/movies-list";

const Main = (props) => {
  const {movieInfo, genres, films, header, history} = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={movieInfo.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header header={header} history={history} />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt={movieInfo.title + ` poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movieInfo.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movieInfo.genre}</span>
                <span className="movie-card__year">{movieInfo.year}</span>
              </p>

              <div className="movie-card__buttons">
                <VideoBtn history={history} />
                <MyListBtn history={history} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {
              genres.map((genre, index) => (
                <li key={`${genre}-${index}`} className={genre.active ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
                  <a href="#" className="catalog__genres-link">{genre.name}</a>
                </li>
              ))
            }
          </ul>

          <MoviesList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,

  genres: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  header: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default Main;
