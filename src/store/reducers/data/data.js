import {ActionType} from "../../actions/action";
import {extend} from "../../../utils/utils";

const initialState = {
  promoFilm: {},
  films: [],
  film: null,
  reviews: [],
  favourites: [],
  reviewStatus: null
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload});

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {promoFilm: action.payload});

    case ActionType.LOAD_FILM:
      return extend(state, {film: action.payload});

    case ActionType.LOAD_REVIEWS:
      return extend(state, {reviews: action.payload});

    case ActionType.LOAD_FAVOURITES:
      return extend(state, {favourites: action.payload});

    case ActionType.GET_REVIEW_STATUS:
      return extend(state, {reviewStatus: action.payload});
  }

  return state;
};

export {data};
