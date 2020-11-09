import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MoviesList from "../movies-list/movies-list";
import {validShape, validArrayOfShape} from "../../utils/props";
import {getFilmsByGenre} from "../../store/selectors";
import {connect} from "react-redux";

const MyList = (props) => {
  const {history, films} = props;
  console.log(films.length);

  return (
    <div className="user-page">
      <Header
        header={{
          title: `My list`,
          headClass: `user-page__head`,
        }}
        history={history}
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList films={films} filmsRendered={films.length} />
      </section>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state),
});

// MyList.propTypes = {
//   films: validArrayOfShape,
//   history: validShape,
// };

export {MyList};
export default connect(mapStateToProps)(MyList);
