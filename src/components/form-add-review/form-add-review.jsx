import React, {useState} from "react";
import {connect} from "react-redux";
import {validFunc, validBool, validNum, validStatusResponse} from "../../utils/props";
import {addReview} from "../../store/actions/api-actions";
import {getReviewStatus} from "../../store/selectors";

const FormAddReview = (props) => {
  const {checkValid, onSubmit, filmId, formValid, status} = props;
  const [rating, setRating] = useState(3);
  const [textReview, setText] = useState(``);

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
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
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
        e.preventDefault();
        e.stopPropagation();
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
            setText(e.target.value);
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
      {
        status &&
        <div className="add-review-error">
          {`Error adding comment: ${status.status} ${status.statusText}`}
        </div>
      }
    </form>
  );
};

FormAddReview.propTypes = {
  checkValid: validFunc,
  onSubmit: validFunc,
  filmId: validNum,
  formValid: validBool,
  status: validStatusResponse
};

const mapStateToProps = (state) => ({
  status: getReviewStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, rating, comment) {
    dispatch(addReview(id, rating, comment));
  }
});

export {FormAddReview};
export default connect(mapStateToProps, mapDispatchToProps)(FormAddReview);
