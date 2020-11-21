import React from "react";
import {connect} from "react-redux";
import {validFunc, validString, validNum, validBool} from "../../utils/props";
import {addReview} from "../../store/actions/api-actions";

const FormAddReview = (props) => {
  const {rating, textReview, handleSubmit, handleFieldChange, checkValid, onSubmit, filmId, formValid} = props;

  const addRating = () => {
    const maxRate = 5;
    const rateBlocks = [];

    for (let i = 1; i <= maxRate; i++) {
      rateBlocks.push(
          <React.Fragment key={`rate-${i}`}>
            <input
              className="rating__input"
              id={`star-${i}`}
              type="radio"
              name="rating"
              value={i * 2}
              defaultChecked={i === parseInt(rating, 10) ? `checked` : !`checked`}
              onChange={handleFieldChange} />
            <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
          </React.Fragment>
      );
    }

    return rateBlocks;
  };

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(e) => {
        handleSubmit(e);
        onSubmit(filmId, rating, textReview);
      }
      }>
      <div className="rating">
        <div className="rating__stars">
          {addRating()}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="textReview"
          id="text"
          placeholder="Review text"
          value={textReview}
          onChange={(e) => {
            handleFieldChange(e);
            checkValid(e);
          }}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={!formValid}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

FormAddReview.propTypes = {
  handleSubmit: validFunc,
  handleFieldChange: validFunc,
  checkValid: validFunc,
  onSubmit: validFunc,
  textReview: validString,
  rating: validString,
  filmId: validNum,
  formValid: validBool
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, rating, comment) {
    dispatch(addReview(id, rating, comment));
  }
});

export {FormAddReview};
export default connect(null, mapDispatchToProps)(FormAddReview);
