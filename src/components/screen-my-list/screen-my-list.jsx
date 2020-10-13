import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import MoviesList from "../movies-list/movies-list";

const MyList = (props) => {
  const {films, header, history} = props;

  return (
    <div className="user-page">
      <Header header={header} history={history} />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList films={films} />
      </section>

      <Footer />
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
  ),
  header: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default MyList;
