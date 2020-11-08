import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import VideoBtn from "../video-btn/video-btn";
import MyListBtn from "../my-list-btn/my-list-btn";
import MoviesByGenres from "../movies-by-genres/movies-by-genres";
import {connect} from "react-redux";
import {validPromoFilm, validArrayOfShape, validShape} from "../../utils/props";

const Main = (props) => {
  const {promoFilm, genres, header, history} = props;
  const {name, genre, released, poster_image, background_image} = promoFilm;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={background_image} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header header={header} history={history} />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster_image} alt={name + ` poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
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
          <MoviesByGenres genres={genres} />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log(`state`, state);

  return {
    promoFilm: state.DATA.promoFilm,
  }
}

// Main.propTypes = {
//   promoFilm: validPromoFilm,
//   genres: validArrayOfShape,
//   header: validShape,
//   history: validShape,
// };

export {Main};
export default connect(mapStateToProps)(Main);
