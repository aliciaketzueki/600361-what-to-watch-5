import PropTypes from "prop-types";

export const validFilm = PropTypes.oneOfType([
  PropTypes.oneOf([null]).isRequired,
  PropTypes.shape({
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
  }).isRequired
]);

export const validBool = PropTypes.bool.isRequired;
export const validShape = PropTypes.shape().isRequired;
export const validArrayOfShape = PropTypes.arrayOf(PropTypes.shape()).isRequired;
export const validNum = PropTypes.number.isRequired;
export const validArrayOfString = PropTypes.arrayOf(PropTypes.string).isRequired;
export const validFunc = PropTypes.func.isRequired;
export const validString = PropTypes.string.isRequired;
export const validOneOfType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({current: PropTypes.any})
]);
