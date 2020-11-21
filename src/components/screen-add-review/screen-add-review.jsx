import React, {useEffect} from "react";
import {connect} from "react-redux";
import BigMovieCard from "../big-movie-card/big-movie-card";
import {validFilm} from "../../utils/props";
import {getFilm} from "../../store/selectors";
import {fetchFilm} from "../../store/actions/api-actions";

const AddReview = (props) => {
  const {film, match, loadCurrentFilm} = props;
  const filmId = match.params.id;

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

const mapStateToProps = (state) => ({
  film: getFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentFilm(id) {
    dispatch(fetchFilm(id));
  },
});

AddReview.propTypes = {
  // film: validFilm
};

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
