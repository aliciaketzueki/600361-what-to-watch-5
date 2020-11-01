import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import VideoBtn from "../video-btn/video-btn";
import MyListBtn from "../my-list-btn/my-list-btn";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import ShowMore from "../show-more/show-more";
import {connect} from "react-redux";
import {validPromoFilm, validArrayOfShape, validShape, validNum} from "../../utils/props";

const Main = (props) => {
  const {promoFilm, genres, header, history, filmsRendered, moviesList} = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header header={header} history={history} />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt={promoFilm.name + ` poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.year}</span>
              </p>

              <div className="movie-card__buttons">
                <VideoBtn history={history} />
                <MyListBtn curFilmId={15} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList genres={genres} />
          <MoviesList moviesList={moviesList} filmsRendered={filmsRendered} />
          <ShowMore />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
  filmsRendered: state.filmsRendered,
});

Main.propTypes = {
  promoFilm: validPromoFilm,
  genres: validArrayOfShape,
  films: validArrayOfShape,
  header: validShape,
  moviesList: validArrayOfShape,
  filmsRendered: validNum,
  history: validShape,
};

export {Main};
export default connect(mapStateToProps)(Main);
