import {ActionType, createGenresList, changeGenre, showMore, loadFilms, loadPromoFilm, loadFilm, loadReviews, loadFavourites, requireAuthorization, loadUser, redirectToRoute} from "./action";
import {FILM, FILMS, GENRE, FILMS_RENDERED, REVIEWS, URL, STATUS, AUTH_INFO} from "../../mocks";

describe(`Action creators work correctly`, () => {
  it(`Action creator createGenresList`, () => {
    expect(createGenresList(FILMS)).toEqual({
      type: ActionType.CREATE_GENRES_LIST,
      payload: FILMS,
    });
  });

  it(`Action creator changeGenre`, () => {
    expect(changeGenre(GENRE)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: GENRE,
    });
  });

  it(`Action creator showMore`, () => {
    expect(showMore(FILMS_RENDERED)).toEqual({
      type: ActionType.SHOW_MORE,
      payload: FILMS_RENDERED,
    });
  });

  it(`Action creator loadFilms`, () => {
    expect(loadFilms(FILMS)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: FILMS,
    });
  });

  it(`Action creator loadPromoFilm`, () => {
    expect(loadPromoFilm(FILM)).toEqual({
      type: ActionType.LOAD_PROMO_FILM,
      payload: FILM,
    });
  });

  it(`Action creator loadFilm`, () => {
    expect(loadFilm(FILM)).toEqual({
      type: ActionType.LOAD_FILM,
      payload: FILM,
    });
  });

  it(`Action creator loadReviews`, () => {
    expect(loadReviews(REVIEWS)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: REVIEWS,
    });
  });

  it(`Action creator loadFavourites`, () => {
    expect(loadFavourites(FILMS)).toEqual({
      type: ActionType.LOAD_FAVOURITES,
      payload: FILMS,
    });
  });

  it(`Action creator requireAuthorization`, () => {
    expect(requireAuthorization(STATUS)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: STATUS,
    });
  });

  it(`Action creator loadUser`, () => {
    expect(loadUser(AUTH_INFO)).toEqual({
      type: ActionType.LOAD_USER,
      payload: AUTH_INFO,
    });
  });

  it(`Action creator redirectToRoute`, () => {
    expect(redirectToRoute(URL)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: URL,
    });
  });
});
