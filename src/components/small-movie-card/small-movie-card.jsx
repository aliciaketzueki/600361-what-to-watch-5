import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({isActive: true});
  }

  handleMouseLeave() {
    this.setState({isActive: false});
  }

  render() {
    const {film} = this.props;
    const {src, name} = film;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
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

SmallMovieCard.propTypes = {
  film: PropTypes.shape().isRequired,
};

export default SmallMovieCard;
