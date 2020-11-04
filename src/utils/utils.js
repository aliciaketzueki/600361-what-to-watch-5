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
  const film = {
    year: getFloor(getRandom(1990, 2020)),
    videoSrc: `https://docs.google.com/uc?id=1lOjED9R5dp-caVj1S8Wf8jjr3ob_qThW`,
    id: getFloor(getRandom(1000, 9999)),
    name,
    bg: `bg-the-grand-budapest-hotel.jpg`,
    poster: name.split(` `).join(`-`).split(/[^a-zA-Z0-9_\-]/).join(``).toLowerCase() + `.jpg`,
    genreId: getFloor(getRandom(0, 9)),
    // genre: genres[film.genreId].name,
    rating: getRandom(0, 10)
  };

  film.genre = genres[film.genreId].name;

  return film;
};

export const createFilmsArr = (arr) => {
  const filmArr = arr.map((item) => createFilmCard(item));

  return filmArr;
};
