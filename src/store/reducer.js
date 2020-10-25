import {ActionType} from "./action";
import films from "../mocks/films";
import {extend} from "../utils";

const initialState = {
  activeGenre: `All genres`,
  moviesList: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      const filteredMovies = action.genre.toLowerCase() === initialState.activeGenre.toLowerCase() ? films : films.filter((film) => film.genre.toLowerCase() === action.genre.toLowerCase());

      return extend(state, {activeGenre: action.genre, moviesList: filteredMovies});
  }

  return state;
};

export {reducer};
