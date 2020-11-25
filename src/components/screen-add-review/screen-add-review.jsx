import React, {useEffect} from "react";
import {connect} from "react-redux";
import BigMovieCard from "../big-movie-card/big-movie-card";
import {validFilm, validNum, validFunc} from "../../utils/props";
import {getFilm} from "../../store/selectors";
import {fetchFilm} from "../../store/actions/api-actions";

const AddReview = (props) => {
  const {film, filmId, loadCurrentFilm} = props;

  useEffect(() => {
    loadCurrentFilm(filmId);
  }, [filmId]);

  if (!film) {
    return null;
  }

  return (
    <BigMovieCard
      isFull={true}
      isReview={true}
      film={film}
    />
  );
};

AddReview.propTypes = {
  film: validFilm,
  filmId: validNum,
  loadCurrentFilm: validFunc,
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentFilm(id) {
    dispatch(fetchFilm(id));
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
