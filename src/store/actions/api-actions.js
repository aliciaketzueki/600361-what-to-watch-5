import {loadFilms, createGenresList, loadPromoFilm, loadFilm, loadReviews, loadFavourites, requireAuthorization, redirectToRoute} from "../actions/action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../../utils/const";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(loadFilms(data));
      dispatch(createGenresList(data));
    })
    .catch(() => {
      throw Error(`Ошибка загруки списка фильмов`);
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => {
      dispatch(loadPromoFilm(data));
    })
    .catch(() => {
      throw Error(`Ошибка загруки промо-фильма`);
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => {
      dispatch(loadFilm(data));
    })
    .catch(() => {
      throw Error(`Ошибка загруки фильма`);
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(loadReviews(data));
    })
    .catch(() => {
      throw Error(`Ошибка загруки отзывов`);
    })
);

export const addReview = (id, rating, comment) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(() => {
      dispatch(redirectToRoute(`${APIRoute.FILMS}/${id}`));
    })
    .catch(() => {
      throw Error(`Ошибка добавления отзыва`);
    })
);

export const fetchFavourites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVOURITES)
    .then(({data}) => {
      dispatch(loadFavourites(data));
    })
    .catch(() => {
      throw Error(`Ошибка загруки любимых фильмов`);
    })
);

export const addToMyList = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVOURITES}/${id}/${status}`)
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);
