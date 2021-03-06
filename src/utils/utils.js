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
  return activeGenre === ALL_GENRES ? films : films.filter((film) => film.genre === activeGenre);
};

export const renderFilms = (films, filmsRendered) => {
  if (filmsRendered < films.length - INITIAL_FILMS_NUM) {
    return filmsRendered + INITIAL_FILMS_NUM;
  } else {
    return films.length;
  }
};

export const convertFilmProps = (film) => {
  return extend(film, {
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
};

export const convertUserProps = (user) => {
  return extend(user, {
    avatarUrl: user.avatar_url
  });
};
