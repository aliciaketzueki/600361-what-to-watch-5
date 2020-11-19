import React from "react";
import {connect} from "react-redux";
import Header from "../header/header";
import FormAddReview from "../form-add-review/form-add-review";
import withChangingForm from "../../hocs/with-changing-form/with-changing-form";
import {validShape} from "../../utils/props";
import {getCurrentFilm} from "../../store/selectors";
const ReviewFormWrapper = withChangingForm(FormAddReview);

const AddReview = (props) => {
  const {history, film} = props;
  const {name, posterImage, backgroundImage, id} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header
          header={{
            nav: true,
          }}
          history={history}
        />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name + ` poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewFormWrapper filmId={id} />
      </div>

    </section>
  );
};

const mapStateToProps = (state) => ({
  film: getCurrentFilm(state),
});


AddReview.propTypes = {
  history: validShape,
};

export {AddReview};
export default connect(mapStateToProps)(AddReview);
