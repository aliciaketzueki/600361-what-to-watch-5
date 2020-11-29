import {loadFilms, createGenresList, loadPromoFilm, loadFilm, loadReviews, loadFavourites, requireAuthorization, loadUser, redirectToRoute} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../../utils/const";
import {convertUserProps, convertFilmProps} from "../../utils/utils";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(loadFilms(data.map((item) => convertFilmProps(item))));
      dispatch(createGenresList(data));
    })
    .catch(() => {
      throw Error(`Ошибка загруки списка фильмов`);
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => {
      dispatch(loadPromoFilm(convertFilmProps(data)));
    })
    .catch(() => {
      throw Error(`Ошибка загруки промо-фильма`);
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => {
      dispatch(loadFilm(convertFilmProps(data)));
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
      dispatch(loadFavourites(data.map((item) => convertFilmProps(item))));
    })
    .catch(() => {
      throw Error(`Ошибка загруки любимых фильмов`);
    })
);

export const addToMyList = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVOURITES}/${id}/${status}`)
    .catch(() => {
      throw Error(`Ошибка добавления фильма в избранное`);
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGIN)
    .then(({data}) => {
      dispatch(loadUser(convertUserProps(data)));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUser(convertUserProps(data)));
    })
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      throw Error(`Ошибка авторизации`);
    })
);
