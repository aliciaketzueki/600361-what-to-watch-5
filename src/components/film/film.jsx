import React from "react";
import PropTypes from "prop-types";
import {Link, NavLink} from "react-router-dom";
import moment from "moment";

const Film = (props) => {
  const {moviesList, reviews} = props;

  const addReviews = () => {
    const cols = 2;
    const half = Math.ceil(reviews.length / cols);
    const reviewBlocks = [];
    let resultArray = [];

    for (let j = 0; j < reviews.length; j++) {
      reviewBlocks.push(
          <div className="review" key={`review-${j}`}>
            <blockquote className="review__quote">
              <p className="review__text">{reviews[j].text}</p>

              <footer className="review__details">
                <cite className="review__author">{reviews[j].author}</cite>
                <time className="review__date" dateTime={moment(new Date(reviews[j].date)).format(`YYYY-DD-MM`)}>{reviews[j].date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{reviews[j].rating.toFixed(1).replace(`.`, `,`)}</div>
          </div>
      );
    }

    for (let i = 0; i < cols; i++) {
      let finish;

      if (reviews.length % 2 !== 0 && i === cols - 1) {
        finish = half * (i + 1) - 1;
      } else {
        finish = half * (i + 1);
      }

      resultArray.push(
          <div className="movie-card__reviews-col" key={`reviews-col-${i}`}>{reviewBlocks.slice(half * i, finish)}</div>
      );
    }

    return resultArray;
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <NavLink to="#" className="movie-nav__link">Overview</NavLink>
                  </li>
                  <li className="movie-nav__item">
                    <NavLink to="#" className="movie-nav__link">Details</NavLink>
                  </li>
                  <li className="movie-nav__item">
                    <NavLink to="#" className="movie-nav__link">Reviews</NavLink>
                  </li>
                </ul>
              </nav>

              {/* RATING */}
              <div className="movie-rating">
                <div className="movie-rating__score">8,9</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">Very good</span>
                  <span className="movie-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>

                <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

                <p className="movie-card__director"><strong>Director: Wes Andreson</strong></p>

                <p className="movie-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
              </div>

              {/* DETAILS */}
              <div className="movie-card__text movie-card__row">
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">Wes Andreson</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">
                      Bill Murray, <br />
                      Edward Norton, <br />
                      Jude Law, <br />
                      Willem Dafoe, <br />
                      Saoirse Ronan, <br />
                      Tony Revoloru, <br />
                      Tilda Swinton, <br />
                      Tom Wilkinson, <br />
                      Owen Wilkinson, <br />
                      Adrien Brody, <br />
                      Ralph Fiennes, <br />
                      Jeff Goldblum
                    </span>
                  </p>
                </div>

                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">1h 39m</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">Comedy</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">2014</span>
                  </p>
                </div>
              </div>

              {/* REVIEWS */}
              <div className="movie-card__reviews movie-card__row">
                {addReviews()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

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
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
  ),

  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      })
  ).isRequired
};

export default Film;
