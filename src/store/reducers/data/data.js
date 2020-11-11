import {ActionType} from "../../action";
import {extend, convertFilmProps} from "../../../utils/utils";

const initialState = {
  loading: true,
  promoFilm: {},
  films: [],
  reviews: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {loading: false, films: action.payload});

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {promoFilm: convertFilmProps(action.payload)});

    case ActionType.LOAD_REVIEWS:
      return extend(state, {reviews: action.payload});
  }

  return state;
};

export {data};
