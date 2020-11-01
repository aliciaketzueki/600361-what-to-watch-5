import React from "react";
import Review from "../review/review";
import {validArrayOfShape} from "../../utils/props";

const TabReviews = (props) => {
  function addReviews(reviews) {
    const cols = 2;
    const half = Math.ceil(reviews.length / cols);
    const reviewBlocks = [];
    let resultArray = [];

    for (let j = 0; j < reviews.length; j++) {
      reviewBlocks.push(
          <Review key={`review-${j}`} review={reviews[j]} />
      );
    }

    for (let i = 0; i < cols; i++) {
      let finish;

      if (reviews.length % 2 !== 0 && i === cols - 1) {
        finish = half * (i + 1) - 1;
      } else {
        finish = half * (i + 1);
      }

      resultArray.push(
          <div className="movie-card__reviews-col" key={`reviews-col-${i}`}>{reviewBlocks.slice(half * i, finish)}</div>
      );
    }

    return resultArray;
  }

  const {reviews} = props;

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        {addReviews(reviews)}
      </div>
    </React.Fragment>
  );
};

TabReviews.propTypes = {
  reviews: validArrayOfShape,
};

export default TabReviews;
