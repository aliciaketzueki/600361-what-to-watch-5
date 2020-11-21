export const ActionType = {
  CREATE_GENRES_LIST: `CREATE_GENRES_LIST`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE: `SHOW_MORE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_FILM: `LOAD_FILM`,
  CHANGE_ACTIVE_FILM: `CHANGE_ACTIVE_FILM`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOAD_USER: `LOAD_USER`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_FAVOURITES: `LOAD_FAVOURITES`,
};

export const createGenresList = (films) => ({
  type: ActionType.CREATE_GENRES_LIST,
  payload: films
});

export const changeGenre = (activeGenre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: activeGenre,
});

export const showMore = (filmsRendered) => ({
  type: ActionType.SHOW_MORE,
  payload: filmsRendered
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const loadPromoFilm = (promoFilm) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: promoFilm
});

export const loadFilm = (film) => ({
  type: ActionType.LOAD_FILM,
  payload: film
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews
});

export const loadFavourites = (films) => ({
  type: ActionType.LOAD_FAVOURITES,
  payload: films
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status
});

export const loadUser = (status) => ({
  type: ActionType.LOAD_USER,
  payload: status
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
