
import {connect} from "react-redux";import React, {Fragment} from "react";
import MovieCardHead from "../movie-card-head/movie-card-head";
import MovieCardDescr from "../movie-card-descr/movie-card-descr";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import Tabs from "../tabs/tabs";
import {getPromoFilm, getCurrentFilm} from "../../store/selectors";
const TabSwitcher = withActiveItem(Tabs);

const BigMovieCard = (props) => {
  const {history, isFull, film, reviews, isLoadedFilm, promoFilm} = props;
  const {name, posterImage} = film;

  return (
    <section className={`movie-card ${isFull ? "movie-card--full" : ""}`}>
      {
        film !== promoFilm &&
        <Fragment>
          <div className="movie-card__hero">
            <MovieCardHead film={film} history={history} />

            <div className="movie-card__wrap">
              <MovieCardDescr film={film} history={history} />
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={posterImage} alt={name + ` poster`} width="218" height="327" />
              </div>

              <TabSwitcher reviews={reviews} film={film} />
            </div>
          </div>
        </Fragment>
        || 
        <Fragment>
          <MovieCardHead film={film} history={history} />

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={posterImage} alt={name + ` poster`} width="218" height="327" />
              </div>
              <MovieCardDescr film={film} history={history} />
            </div>
          </div>
        </Fragment>
      }
    </section>
  );
};

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
});

// export default BigMovieCard;
export {BigMovieCard};
export default connect(mapStateToProps)(BigMovieCard);
