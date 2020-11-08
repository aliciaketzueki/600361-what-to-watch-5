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
    id: getFloor(getRandom(1000, 9999)),
    name,
    poster_image: `img/the-grand-budapest-hotel-poster.jpg`,
    preview_image: `img/` + name.split(` `).join(`-`).split(/[^a-zA-Z0-9_\-]/).join(``).toLowerCase() + `.jpg`,
    background_image: `img/bg-the-grand-budapest-hotel.jpg`,
    background_color: `#ffffff`,
    video_link: `https://docs.google.com/uc?id=1lOjED9R5dp-caVj1S8Wf8jjr3ob_qThW`,
    preview_video_link: `https://docs.google.com/uc?id=1lOjED9R5dp-caVj1S8Wf8jjr3ob_qThW`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: getRandom(0, 10),
    scores_count: 240,
    director: `Wes Andreson`,
    starring: ["Bill Murray", "Edward Norton", "Jude Law", "Willem Dafoe", "Saoirse Ronan"],
    run_time: 99,
    released: getFloor(getRandom(1990, 2020)),
    is_favorite: false,

    genreId: getFloor(getRandom(0, 9)),
  };

  film.genre = genres[film.genreId].name;

  return film;
};

export const createFilmsArr = (arr) => {
  const filmArr = arr.map((item) => createFilmCard(item));

  return filmArr;
};
