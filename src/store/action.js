export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`, // изменение фильтра по жанрам
  SHOW_MORE: `SHOW_MORE`, // получение списка фильмов в соответствии выбранным жанром.
  ADD_TO_USER_LIST: `ADD_TO_USER_LIST`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_FILM: `LOAD_FILM`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`
};

export const changeGenre = (activeGenre) => ({
  type: ActionType.CHANGE_GENRE,
  genre: activeGenre,
});

export const showMore = (filmsRendered) => ({
  type: ActionType.SHOW_MORE,
  num: filmsRendered
});

export const addToMyList = (curFilmId) => ({
  type: ActionType.ADD_TO_USER_LIST,
  filmId: curFilmId
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const loadPromoFilm = (promoFilm) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: promoFilm
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews
});

export const loadFilm = (film) => ({
  type: ActionType.LOAD_FILM,
  payload: filme
});

export const requireAuthorization = () => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
});
