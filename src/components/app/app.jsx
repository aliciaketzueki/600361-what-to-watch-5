import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {movieInfo} = props;
  const {genres} = props;
  const {moviesList} = props;

  return (
    <Main movieInfo={movieInfo} genres={genres} moviesList={moviesList} />
  );
};

App.propTypes = {
  movieInfo: PropTypes.shape().isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  moviesList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default App;
