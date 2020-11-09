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
          exact path={AppRoute.ROOT}
          render={({history}) => (
            <Main history={history} />
          )}
        />

        <Route
          exact path={AppRoute.LOGIN}
          render={({history}) => (
            <Login history={history} />
          )}
        />

        <PrivateRoute
          exact path={AppRoute.MY_LIST}
          render={({history}) => (
            <MyList history={history} />
          )}
        />

        <Route
          exact path={AppRoute.FILM}
          render={({history}) => (
            <Film history={history} />
          )}
        />

        <PrivateRoute
          exact path={AppRoute.ADD_REVIEW}
          render={({history}) => (
            <AddReview history={history} />
          )}
        />

        <Route
          exact path={AppRoute.PLAYER}
          render={({history}) => (
            <Player onExitBtnClick={() => history.goBack()} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
