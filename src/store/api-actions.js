import {loadFilms, loadPromoFilm, loadReviews} from "./action";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      console.log(`api films`, data);
      dispatch(loadFilms(data))
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => {
      dispatch(loadPromoFilm(data))
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/films/comments/${id}`)
    .then(({data}) => {
      console.log(`api reviews`, data);
      dispatch(loadReviews(data))
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => {
      console.log(`api film`, data);
      dispatch(loadFilm(data))
    })
);
