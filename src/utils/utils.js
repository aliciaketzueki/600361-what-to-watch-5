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

export const selectFilm = (films, id) => {
  let selectedFilm = films.find((film) => film.id === id);

  return selectedFilm;
};

export const renderFilms = (films, filmsRendered) => {
  if (filmsRendered < films.length - INITIAL_FILMS_NUM) {
    return filmsRendered + INITIAL_FILMS_NUM;
  } else {
    return films.length;
  }
};

export const convertFilmProps = (film) => {
  const newFilms = extend(film, {
    posterImage: film.poster_image,
    previewImage: film.preview_image,
    backgroundImage: film.background_image,
    backgroundColor: film.background_color,
    videoLink: film.video_link,
    previewVideoLink: film.preview_video_link,
    scoresCount: film.scores_count,
    runTime: film.run_time,
    isFavorite: film.is_favorite,
  });

  return newFilms;
};
