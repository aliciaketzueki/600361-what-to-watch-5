import React from "react";
import Header from "../header/header";
import FormAddReview from "../form-add-review/form-add-review";
import withChangingForm from "../../hocs/with-changing-form/with-changing-form";
import {validShape} from "../../utils/props";

const ReviewFormWrapper = withChangingForm(FormAddReview);

const AddReview = (props) => {
  const {header, history} = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header header={header} history={history} />

        <div className="movie-card__poster movie-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewFormWrapper />
      </div>

    </section>
  );
};

AddReview.propTypes = {
  header: validShape,
  history: validShape,
};

export default AddReview;
