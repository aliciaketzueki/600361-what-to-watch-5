import PropTypes from "prop-types";

export const validFilm = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired
}).isRequired;

export const validLoadedFilm = PropTypes.oneOfType([
  PropTypes.oneOf([null]).isRequired,
  validFilm
]);

export const validFilms = PropTypes.arrayOf(validFilm).isRequired;

export const validReview = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
});

export const validReviews = PropTypes.arrayOf(validReview).isRequired;

export const validHeader = PropTypes.shape({
  title: PropTypes.string,
  nav: PropTypes.bool,
  headClass: PropTypes.string
});

export const validBool = PropTypes.bool.isRequired;
export const validShape = PropTypes.shape().isRequired;
export const validNum = PropTypes.number.isRequired;
export const validArrayOfString = PropTypes.arrayOf(PropTypes.string).isRequired;
export const validFunc = PropTypes.func.isRequired;
export const validString = PropTypes.string.isRequired;
export const validOneOfType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({current: PropTypes.any})
]);

export const validUserData = PropTypes.shape({
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  avatarUrl: PropTypes.string
}).isRequired;

export const validChildren = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]).isRequired;
