import {ActionType} from "./action";
import films from "../mocks/films";
import {extend} from "../utils/utils";

const INITIAL_FILMS_NUM = 8;
const initialState = {
  activeGenre: `All genres`,
  moviesList: films,
  filmsRendered: INITIAL_FILMS_NUM
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      const filteredMovies = action.genre.toLowerCase() === initialState.activeGenre.toLowerCase() ? films : films.filter((film) => film.genre.toLowerCase() === action.genre.toLowerCase());
      return extend(state, {activeGenre: action.genre, moviesList: filteredMovies});
    case ActionType.SHOW_MORE:
      if (state.filmsRendered < state.moviesList.length - INITIAL_FILMS_NUM) {
        return extend(state, {filmsRendered: action.num + INITIAL_FILMS_NUM});
      } else {
        return extend(state, {filmsRendered: state.moviesList.length});
      }
  }

  return state;
};

export {reducer};
