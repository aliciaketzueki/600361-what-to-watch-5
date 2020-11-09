import {createSelector} from "reselect";
import {filterFilms, renderFilms} from "../utils/utils";

export const getFilms = (state) => state.DATA.films;
export const getPromoFilm = (state) => state.DATA.promoFilm;
export const getFilmsRendered = (state) => state.PROCESS.filmsRendered;
export const getActiveGenre = (state) => state.PROCESS.activeGenre;
export const getReviews = (state) => state.DATA.reviews;
export const getGenres = (state) => state.PROCESS.genres;
export const getAuthorizationStatus = (state) => state.USER.authorizationStatus;

export const getFilmsByGenre = createSelector(
    getFilms,
    getActiveGenre,
    (films, activeGenre) => filterFilms(films, activeGenre)
);

export const getRenderedFilms = createSelector(
    getFilms,
    getFilmsRendered,
    (films, filmsRendered) => renderFilms(films, filmsRendered)
);
