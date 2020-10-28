import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MoviesList from "../movies-list/movies-list";
import {validShape, validArrayOfShape} from "../../utils/props";

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
  films: validArrayOfShape,
  header: validShape,
  history: validShape,
};

export default MyList;
