import React from "react";
import Footer from "../footer/footer";
import MoviesByGenres from "../movies-by-genres/movies-by-genres";
import {connect} from "react-redux";
import {getPromoFilm} from "../../store/selectors";
import {validFilm} from "../../utils/props";
import BigMovieCard from "../big-movie-card/big-movie-card";

const Main = (props) => {
  const {promoFilm} = props;

  return (
    <React.Fragment>
      <BigMovieCard film={promoFilm} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MoviesByGenres />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  promoFilm: validFilm,
};

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
});

export {Main};
export default connect(mapStateToProps, null)(Main);
