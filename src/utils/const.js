export const MORE_LIKE_NUM = 4;
export const MAX_ACTORS_NUM = 4;
export const MAX_GENRES_NUM = 10;
export const SECOND = 1000;
export const SHORT_TIMEOUT = 10;
export const INITIAL_FILMS_NUM = 8;
export const ALL_GENRES = `All genres`;

export const Validation = {
  EMAIL: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
  PASSWORD: 6,
  COMMENT_MIN: 50,
  COMMENT_MAX: 400
};

export const Errors = {
  EMAIL: `Please enter a valid email address`,
  PASSWORD: `Password must be at least ${Validation.PASSWORD} characters`,
  TEXT_REVIEW: `Review text must be at least ${Validation.COMMENT_MIN} and no more than ${Validation.COMMENT_MAX} characters`
};

export const tabs = [{
  name: `Overview`,
  id: 0,
}, {
  name: `Details`,
  id: 1,
}, {
  name: `Reviews`,
  id: 2
}];

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/my-list`,
  FILM: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
};

export const APIRoute = {
  FILMS: `/films`,
  PROMO: `/films/promo`,
  COMMENTS: `comments`,
  LOGIN: `/login`,
  FAVOURITES: `/favorite`,
  PLAYER: `/player`
};
