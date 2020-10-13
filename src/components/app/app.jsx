import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../screen-main/screen-main";
import Login from "../screen-login/screen-login";
import MyList from "../screen-my-list/screen-my-list";
import Film from "../screen-film/screen-film";
import AddReview from "../screen-add-review/screen-add-review";
import Player from "../screen-player/screen-player";

const App = (props) => {
  const {movieInfo, genres, films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        {/* Главная */}
        <Route
          exact path="/"
          render={({history}) => (
            <Main
              movieInfo={movieInfo}
              genres={genres} films={films}
              header={{headClass: `movie-card__head`, login: true}}
              history={history}
            />
          )}
        />

        {/* Авторизация */}
        <Route
          exact path="/login"
          render={({history}) => (
            <Login
              header={{headClass: `user-page__head`, title: `Sign in`}}
              history={history}
            />
          )}
        />

        {/* Список моих фильмов */}
        <Route
          exact path="/my-list"
          render={({history}) => (
            <MyList
              films={films}
              header={{title: `My list`, headClass: `user-page__head`, login: true}}
              history={history}
            />
          )}
        />

        {/* Карточка фильма */}
        <Route
          exact path="/films/:id"
          render={({history}) => (
            <Film
              films={films}
              reviews={reviews}
              header={{headClass: `movie-card__head`, login: true}}
              history={history}
            />
          )}
        />

        {/* Оставить отзыв */}
        <Route
          exact path="/films/:id/review"
          render={({history}) => (
            <AddReview
              header={{nav: true, login: true}}
              history={history}
            />
          )}
        />

        {/* Трейлер фильма */}
        <Route
          exact path="/player/:id"
          render={({history}) => (
            <Player
              onExitBtnClick={() => history.goBack()}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movieInfo: PropTypes.shape().isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default App;
