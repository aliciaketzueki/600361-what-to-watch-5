import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";

const INITIAL_FILMS_NUM = 8;
const initialState = {
  films: [],
  userList: [],
  genres: [],
  activeGenre: `All genres`,
  filmsRendered: INITIAL_FILMS_NUM,
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      const filteredMovies = action.genre === initialState.activeGenre ? state.films : state.films.filter((film) => film.genreId === action.genre);
      return extend(state, {films: filteredMovies});

    case ActionType.SHOW_MORE:
      if (state.filmsRendered < state.films.length - INITIAL_FILMS_NUM) {
        return extend(state, {filmsRendered: action.num + INITIAL_FILMS_NUM});
      } else {
        return extend(state, {filmsRendered: state.films.length});
      }

    case ActionType.ADD_TO_USER_LIST:
      if (userFilms.indexOf(films[action.filmId]) === -1) {
        userFilms.push(films[action.filmId]);
      }

      return extend(state, {userList: userFilms});
  }

  return state;
};

export {process};
