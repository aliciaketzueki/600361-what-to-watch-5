import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film} = this.props;
    const {src, name} = film;

    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={`img/` + src} alt={name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <Link to="/films/:id" className="small-movie-card__link">{name}</Link>
        </h3>
      </article>
    );
  }
}

export default SmallMovieCard;

SmallMovieCard.propTypes = {
  film: PropTypes.shape().isRequired,
};
