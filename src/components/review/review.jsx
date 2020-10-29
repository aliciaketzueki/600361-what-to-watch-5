import React from "react";
import moment from "moment";
import {validShape} from "../../utils/props";

const Review = (props) => {
  const {review} = props;
  const {author, text, date, rating} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={moment(new Date(date)).format(`YYYY-DD-MM`)}>{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toFixed(1).replace(`.`, `,`)}</div>
    </div>
  );
};

Review.propTypes = {
  review: validShape,
};

export default Review;
