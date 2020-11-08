import PropTypes from "prop-types";

export const validPromoFilm = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  poster_image: PropTypes.string.isRequired,
  preview_image: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  background_color: PropTypes.string.isRequired,
  video_link: PropTypes.string.isRequired,
  preview_video_link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scores_count: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  run_time: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  is_favorite: PropTypes.bool.isRequired
}).isRequired;

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
