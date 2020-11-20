import React from "react";
import Footer from "../footer/footer";
import MoviesByGenres from "../movies-by-genres/movies-by-genres";
import {connect} from "react-redux";
import {getPromoFilm} from "../../store/selectors";
import {validFilm, validShape, validFunc} from "../../utils/props";
import BigMovieCard from "../big-movie-card/big-movie-card";
import {changeActiveFilm} from "../../store/actions/action";

const Main = (props) => {
  const {promoFilm, history, isLoad} = props;
  isLoad(promoFilm);

  return (
    <React.Fragment>
      <BigMovieCard
        history={history}
        film={promoFilm}
      />

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

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  isLoad(film) {
    dispatch(changeActiveFilm(film));
  }
});

Main.propTypes = {
  promoFilm: validFilm,
  history: validShape,
  isLoad: validFunc
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
