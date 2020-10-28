import PropTypes from "prop-types";

export const validPromoFilm = PropTypes.shape({
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
}).isRequired;

export const validShape = PropTypes.shape().isRequired;
export const validArrayOfShape = PropTypes.arrayOf(PropTypes.shape()).isRequired;
export const validNum = PropTypes.number.isRequired;
export const validFunc = PropTypes.func.isRequired;
export const validString = PropTypes.string.isRequired;
export const validOneOfType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({current: PropTypes.any})
]);
