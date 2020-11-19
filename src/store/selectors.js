import {NameSpace} from "./reducers/root-reducer";
import {createSelector} from "reselect";
import {filterFilms, renderFilms} from "../utils/utils";

export const getFilms = (state) => state[NameSpace.DATA].films;
export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
export const getFilmsRendered = (state) => state[NameSpace.PROCESS].filmsRendered;
export const getActiveGenre = (state) => state[NameSpace.PROCESS].activeGenre;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getFilm = (state) => state[NameSpace.DATA].film;
export const getGenres = (state) => state[NameSpace.PROCESS].genres;
export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

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
