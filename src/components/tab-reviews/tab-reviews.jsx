import React from "react";
import Review from "../review/review";
import {validArrayOfShape} from "../../utils/props";

const TabReviews = (props) => {
  const {reviews} = props;
  const firstCol = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secCol = reviews.slice(Math.ceil(reviews.length / 2), reviews.length);

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {
            firstCol.map((review, index) => {
              return <Review key={`review-${index}`} review={review} />;
            })
          }
        </div>
        <div className="movie-card__reviews-col">
          {
            secCol.map((review, index) => {
              return <Review key={`review-${index}`} review={review} />;
            })
          }
        </div>
      </div>
    </React.Fragment>
  );
};

TabReviews.propTypes = {
  reviews: validArrayOfShape,
};

export default TabReviews;
