import {ActionType} from "./action";
import films from "../mocks/films";
import {extend} from "../utils";

const initialState = {
  active_genre: `All genres`,
  movies_list: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return extend(state, {active_genre: action.genre})
    case ActionType.GET_MOVIES_LIST:
      console.log(`GET_MOVIES_LIST`); 
  }

  return state;
};

export {reducer};
