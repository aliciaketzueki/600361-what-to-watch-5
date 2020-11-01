import genres from "../mocks/genres";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const createFilmCard = (arr) => {
  const filmArr = [];

  [].forEach.call(arr, (name) => {
    const film = {};
    film.year = getRandom(1990, 2020);
    film.videoSrc = `https://docs.google.com/uc?id=1lOjED9R5dp-caVj1S8Wf8jjr3ob_qThW`;
    film.id = getRandom(1000, 9999);
    film.name = name;
    film.poster = film.name.split(` `).join(`-`).split(/[^a-zA-Z0-9_\-]/).join(``).toLowerCase() + `.jpg`;
    film.genreId = getRandom(0, 9);
    film.genre = genres[film.genreId].name;
    filmArr.push(film);
  });

  return filmArr;
};
