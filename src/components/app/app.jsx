import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../screen-main/screen-main";
import Login from "../screen-login/screen-login";
import MyList from "../screen-my-list/screen-my-list";
import Film from "../screen-film/screen-film";
import AddReview from "../screen-add-review/screen-add-review";
import Player from "../screen-player/screen-player";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          render={({history}) => (
            <Main history={history} />
          )}
        />

        <Route
          exact path="/login"
          render={({history}) => (
            <Login history={history} />
          )}
        />

        <Route
          exact path="/my-list"
          render={({history}) => (
            <MyList history={history} />
          )}
        />

        <Route
          exact path="/films/:id"
          render={({history}) => (
            <Film history={history} />
          )}
        />

        <Route
          exact path="/films/:id/review"
          render={({history}) => (
            <AddReview history={history} />
          )}
        />

        <Route
          exact path="/player/:id"
          render={({history}) => (
            <Player onExitBtnClick={() => history.goBack()} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
