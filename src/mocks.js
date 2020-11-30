import React from "react";
import {AuthorizationStatus, AppRoute, ALL_GENRES, INITIAL_FILMS_NUM} from "./utils/const";
import {validChildren} from "./utils/props";

export const FILM = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  previewImage: `img/the-grand-budapest-hotel.jpg`,
  backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
  backgroundColor: `#ffffff`,
  videoLink: `https://some-link`,
  previewVideoLink: `https://some-link`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
  isFavorite: false
};

export const FILMS = [FILM];

export const FILM_ID = FILM.id;

export const GENRE = `Crime`;

export const GENRES_LIST = [ALL_GENRES, GENRE];

export const FILMS_RENDERED = INITIAL_FILMS_NUM;

export const REVIEW = {
  id: 1,
  user: {
    id: 4,
    name: `Kate Muir`
  },
  rating: 8.9,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`
};

export const REVIEWS = [REVIEW];

export const URL = AppRoute.ROOT;

export const STATUS = AuthorizationStatus.AUTH;

export const AUTH_INFO = {
  id: 1,
  email: `fd@mail.com`,
  name: `fd`,
  avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`
};

export const USER_DATA = {
  email: `Oliver.conner@gmail.com`,
  password: `12345678`
};

export const MOCK_EMAIL = USER_DATA.email;

export const MOCK_PASSWORD = `12345678796`;

export const NOOP = () => {};

export const COMMENT = `This is a test comment to check input changing`;

export const RATING = 6;

export const HEADER = {
  title: `My list`,
  headClass: `movie-card__head`,
  nav: true
};

export const MOCK_COMPONENT = () => <div />;

export const MOCK_COMPONENT_WITH_CHILDREN = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

export const MOVIE = {
  duration: 1000,
  progress: 10
};

export const ERROR_STATUS = {
  status: 404,
  statusText: `Not Found`
};

MOCK_COMPONENT_WITH_CHILDREN.propTypes = {
  children: validChildren
};
