import {ActionType} from "../../actions/action";
import {extend, convertFilmProps} from "../../../utils/utils";

const initialState = {
  loading: true,
  promoFilm: {},
  films: [],
  film: {},
  reviews: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {loading: false, films: action.payload});

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {promoFilm: convertFilmProps(action.payload)});

    case ActionType.LOAD_FILM:
      console.log(`action.payload`, action.payload);
      return extend(state, {film: action.payload});

    case ActionType.LOAD_REVIEWS:
      return extend(state, {reviews: action.payload});
  }

  return state;
};

export {data};
