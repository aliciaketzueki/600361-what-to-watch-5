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
import {connect} from "react-redux";

const TabSwitcher = withActiveItem(Tabs);

const Film = (props) => {
  const {films, reviews, header, history, promoFilm} = props;
  const {name, genre, released, background_image, poster_image} = promoFilm;

  const genreId = 4;
  const filmsMoreLike = films.filter((film) => film.genreId === genreId);

  console.log(`reviews`, reviews);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background_image} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header header={header} history={history} />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
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
              <img src={poster_image} alt={name} width="218" height="327" />
            </div>

            <TabSwitcher reviews={reviews} promoFilm={promoFilm} />
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
  films: state.films,
  promoFilm: state.promoFilm,
  reviews: state.reviews
});

// Film.propTypes = {
//   promoFilm: validPromoFilm,
//   films: validArrayOfShape,
//   reviews: validArrayOfShape,
//   header: validShape,
//   history: validShape,
//   tabs: validArrayOfShape
// };

export {Film};
export default connect(mapStateToProps)(Film);
