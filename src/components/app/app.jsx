import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";
import Main from "../screen-main/screen-main";
import Login from "../screen-login/screen-login";
import MyList from "../screen-my-list/screen-my-list";
import Film from "../screen-film/screen-film";
import AddReview from "../screen-add-review/screen-add-review";
import Player from "../screen-player/screen-player";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../utils/const";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          component={Main}
        />

        <Route
          exact
          path={AppRoute.LOGIN}
          component={Login}
        />

        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => (
            <MyList />
          )}
        />

        <Route
          exact
          path={AppRoute.FILM}
          render={({match}) => (
            <Film filmId={parseInt(match.params.id, 10)} />
          )}
        />

        <PrivateRoute
          exact
          path={AppRoute.ADD_REVIEW}
          render={({match}) => (
            <AddReview filmId={parseInt(match.params.id, 10)} />
          )}
        />

        <Route
          exact
          path={AppRoute.PLAYER}
          render={({history, match}) => (
            <Player history={history} filmId={parseInt(match.params.id, 10)} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
