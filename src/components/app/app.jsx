import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import MyList from "../myList/myList";
import Film from "../film/film";
import AddReview from "../addReview/addReview";
import Player from "../player/player";

const App = (props) => {
  const {movieInfo} = props;
  const {genres} = props;
  const {moviesList} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main movieInfo={movieInfo} genres={genres} moviesList={moviesList} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/myList">
          <MyList moviesList={moviesList} />
        </Route>
        <Route exact path="/films/:id">
          <Film moviesList={moviesList} />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movieInfo: PropTypes.shape().isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  moviesList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default App;
