import genres from "../mocks/genres";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getRandom = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(1);
};

const getFloor = (num) => {
  return Math.floor(num);
};

export const createFilmCard = (name) => {
  const film = {};
  film.year = getFloor(getRandom(1990, 2020));
  film.videoSrc = `https://docs.google.com/uc?id=1lOjED9R5dp-caVj1S8Wf8jjr3ob_qThW`;
  film.id = getFloor(getRandom(1000, 9999));
  film.name = name;
  film.bg = `bg-the-grand-budapest-hotel.jpg`;
  film.poster = name.split(` `).join(`-`).split(/[^a-zA-Z0-9_\-]/).join(``).toLowerCase() + `.jpg`;
  film.genreId = getFloor(getRandom(0, 9));
  film.genre = genres[film.genreId].name;
  film.rating = getRandom(0, 10);

  return film;
};

export const createFilmsArr = (arr) => {
  const filmArr = [];

  arr.forEach((name) => {
    filmArr.push(createFilmCard(name));
  });

  return filmArr;
};
