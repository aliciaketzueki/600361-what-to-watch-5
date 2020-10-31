import React from "react";
import {validFunc, validString} from "../../utils/props";

const FormAddReview = (props) => {
  const {rating, text, handleSubmit, handleFieldChange} = props;

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
              value={i}
              defaultChecked={i === parseInt(rating, 10) ? `checked` : !`checked`}
              onChange={handleFieldChange} />
            <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
          </React.Fragment>
      );
    }

    return rateBlocks;
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {addRating()}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="text"
          id="text"
          placeholder="Review text"
          onChange={handleFieldChange}
          value={text}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

FormAddReview.propTypes = {
  handleSubmit: validFunc,
  handleFieldChange: validFunc,
  text: validString,
  rating: validString
};

export default FormAddReview;
