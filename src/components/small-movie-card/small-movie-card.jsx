import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Video from "../video/video";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.timer = 0;
    this.video = React.createRef();
  }

  handleMouseEnter() {
    this.timer = setTimeout(() => {
      this.setState({isActive: true});
      this.video.current.play();
    }, 1000);
  }

  handleMouseLeave() {
    this.setState({isActive: false});
    this.video.current.pause();
    this.video.current.load();
    clearTimeout(this.timer);
  }

  render() {
    const {film} = this.props;
    const {name} = film;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="small-movie-card__image">
          <Video film={film} video={this.video} />
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
