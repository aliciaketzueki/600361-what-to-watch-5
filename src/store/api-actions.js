import {loadFilms, createGenresList, loadPromoFilm, loadReviews, loadFilm} from "./action";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      dispatch(loadFilms(data));
      dispatch(createGenresList(data));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => {
      dispatch(loadPromoFilm(data));
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/films/comments/${id}`)
    .then(({data}) => {
      dispatch(loadReviews(data));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => {
      dispatch(loadFilm(data));
    })
);
