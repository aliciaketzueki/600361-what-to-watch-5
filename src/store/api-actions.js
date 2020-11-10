import {loadFilms, createGenresList, loadPromoFilm, loadReviews, loadFilm, requireAuthorization, redirectToRoute} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../utils/const";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(loadFilms(data));
      dispatch(createGenresList(data));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => {
      dispatch(loadPromoFilm(data));
    })
);

export const fetchReviews = () => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS)
    .then(({data}) => {
      dispatch(loadReviews(data));
    })
);

export const fetchFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILM)
    .then(({data}) => {
      dispatch(loadFilm(data));
    })
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);
