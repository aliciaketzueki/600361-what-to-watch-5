import React, {Fragment} from "react";
import MovieCardHead from "../movie-card-head/movie-card-head";
import MovieCardDescr from "../movie-card-descr/movie-card-descr";
import MovieCardPoster from "../movie-card-poster/movie-card-poster";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withChangingForm from "../../hocs/with-changing-form/with-changing-form";
import withValidation from "../../hocs/with-validation/with-validation";
import FormAddReview from "../form-add-review/form-add-review";
import Tabs from "../tabs/tabs";
import {validFilm, validShape} from "../../utils/props";
import PropTypes from "prop-types";

const TabSwitcher = withActiveItem(Tabs);
const ReviewFormWrapper = withValidation(withChangingForm(FormAddReview));

const BigMovieCard = (props) => {
  const {history, isFull, isReview, film, reviews} = props;
  const {id} = film;

  return (
    <section className={`movie-card ${isFull ? `movie-card--full` : ``}`}>
      {
        isFull && !isReview &&
        <Fragment>
          <div className="movie-card__hero">
            <MovieCardHead film={film} history={history} />

            <div className="movie-card__wrap">
              <MovieCardDescr film={film} history={history} />
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <MovieCardPoster film={film} classname="big" />
              <TabSwitcher reviews={reviews} film={film} />
            </div>
          </div>
        </Fragment>
        || isFull && isReview &&
        <Fragment>
          <div className="movie-card__header">
            <MovieCardHead film={film} history={history} headerNav={true} />
            <MovieCardPoster film={film} classname="small" />
          </div>

          <div className="add-review">
            <ReviewFormWrapper filmId={id} />
          </div>
        </Fragment>
        ||
        <Fragment>
          <MovieCardHead film={film} history={history} />

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <MovieCardPoster film={film}/>
              <MovieCardDescr film={film} history={history} />
            </div>
          </div>
        </Fragment>
      }
    </section>
  );
};

BigMovieCard.propTypes = {
  film: validFilm,
  reviews: PropTypes.arrayOf(PropTypes.shape()),
  history: validShape,
  isFull: PropTypes.bool,
  isReview: PropTypes.bool
};

export default BigMovieCard;
