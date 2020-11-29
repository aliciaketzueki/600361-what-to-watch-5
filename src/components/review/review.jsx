import React from "react";
import moment from "moment";
import {validReview} from "../../utils/props";

const Review = (props) => {
  const {review} = props;
  const {user, comment, date, rating} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={moment(new Date(date)).format(`YYYY-DD-MM`)}>{moment(date).format(`MMMM D, YYYY`)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toFixed(1).replace(`.`, `,`)}</div>
    </div>
  );
};

Review.propTypes = {
  review: validReview,
};

export default Review;
