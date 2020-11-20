import React, {useEffect} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MoviesList from "../movies-list/movies-list";
import {validShape, validArrayOfShape, validFunc} from "../../utils/props";
import {fetchFavourites} from "../../store/actions/api-actions";
import {getFavourites} from "../../store/selectors";
import {connect} from "react-redux";

const MyList = (props) => {
  const {history, films, loadFavourites} = props;

  useEffect(() => {
    loadFavourites();
  }, []);

  if (!films) {
    return null;
  }

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
        {
          films && films.length > 0 &&
          <MoviesList films={films} filmsRendered={films.length} />
        }
      </section>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  films: getFavourites(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavourites() {
    dispatch(fetchFavourites());
  },
});

MyList.propTypes = {
  films: validArrayOfShape,
  history: validShape,
  loadFavourites: validFunc
};

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
