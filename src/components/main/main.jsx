import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {
  const {movieInfo} = props;
  const {genres} = props;
  const {moviesList} = props;

  return (
    <div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={movieInfo.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

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
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
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

          <div className="catalog__movies-list">
            {
              moviesList.map((movie, index) => (
                <article key={`${movie}-${index}`} className="small-movie-card catalog__movies-card">
                  <div className="small-movie-card__image">
                    <img src={`img/` + movie.src} alt={movie.name} width="280" height="175" />
                  </div>
                  <h3 className="small-movie-card__title">
                    <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>
                  </h3>
                </article>
              ))
            }
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

Main.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,

  genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired
      })
  ).isRequired,

  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
  )
};

export default Main;
