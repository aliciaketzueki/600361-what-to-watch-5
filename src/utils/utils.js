import {ALL_GENRES, INITIAL_FILMS_NUM} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getGenres = (films) => {
  let genres = films.map((film) => film.genre).filter((el, index, arr) => arr.indexOf(el) === index);
  genres.unshift(ALL_GENRES);

  return genres;
};

export const filterFilms = (films, activeGenre) => {
  const filteredFilms = activeGenre === ALL_GENRES ? films : films.filter((film) => film.genre === activeGenre);

  return filteredFilms;
};

export const renderFilms = (films, filmsRendered) => {
  if (filmsRendered < films.length - INITIAL_FILMS_NUM) {
    return filmsRendered + INITIAL_FILMS_NUM;
  } else {
    return films.length;
  }
};
