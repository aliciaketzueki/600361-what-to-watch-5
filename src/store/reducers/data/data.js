import {ActionType} from "../../actions/action";
import {extend, convertFilmProps} from "../../../utils/utils";

const initialState = {
  promoFilm: {},
  films: [],
  film: null,
  reviews: [],
  favourites: []
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload});

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {promoFilm: convertFilmProps(action.payload)});

    case ActionType.LOAD_FILM:
      return extend(state, {film: convertFilmProps(action.payload)});

    case ActionType.LOAD_REVIEWS:
      return extend(state, {reviews: action.payload});

    case ActionType.LOAD_FAVOURITES:
      return extend(state, {favourites: action.payload});
  }

  return state;
};

export {data};
