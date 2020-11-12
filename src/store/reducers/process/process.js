import {ActionType} from "../../actions/action";
import {extend, getGenres} from "../../../utils/utils";
import {INITIAL_FILMS_NUM, ALL_GENRES} from "../../../utils/const";

const initialState = {
  genres: [],
  film: {},
  activeGenre: ALL_GENRES,
  filmsRendered: INITIAL_FILMS_NUM,
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CREATE_GENRES_LIST:
      return extend(state, {genres: getGenres(action.payload)});

    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.payload});

    case ActionType.SHOW_MORE:
      return extend(state, {filmsRendered: action.payload});
  }

  return state;
};

export {process};
