import React from "react";
import {connect} from "react-redux";
import BigMovieCard from "../big-movie-card/big-movie-card";
import {validShape, validFilm} from "../../utils/props";
import {getCurrentFilm} from "../../store/selectors";

const AddReview = (props) => {
  const {history, film} = props;

  return (
    <BigMovieCard
      history={history}
      isFull={true}
      isReview={true}
      film={film}
    />
  );
};

const mapStateToProps = (state) => ({
  film: getCurrentFilm(state),
});

AddReview.propTypes = {
  history: validShape,
  film: validFilm
};

export {AddReview};
export default connect(mapStateToProps)(AddReview);
