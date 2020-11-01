import {ActionType} from "./action";
import {films, userFilms} from "../mocks/films";
import {extend} from "../utils/utils";

const INITIAL_FILMS_NUM = 8;
const initialState = {
  activeGenre: 0,
  moviesList: films,
  userList: userFilms,
  filmsRendered: INITIAL_FILMS_NUM,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      const filteredMovies = action.genre === initialState.activeGenre ? films : films.filter((film) => film.genreId === action.genre);
      return extend(state, {activeGenre: action.genre, moviesList: filteredMovies});
    case ActionType.SHOW_MORE:
      if (state.filmsRendered < state.moviesList.length - INITIAL_FILMS_NUM) {
        return extend(state, {filmsRendered: action.num + INITIAL_FILMS_NUM});
      } else {
        return extend(state, {filmsRendered: state.moviesList.length});
      }
    case ActionType.ADD_TO_USER_LIST:
      if (userFilms.indexOf(films[action.filmId]) === -1) {
        userFilms.push(films[action.filmId]);
      }

      return extend(state, {userList: userFilms});
  }

  return state;
};

export {reducer};
