import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {movieInfo} = props;

  return (
    <Main movieInfo = {movieInfo}/>
  );
};

App.propTypes = {
  movieInfo: PropTypes.shape().isRequired
};

export default App;
