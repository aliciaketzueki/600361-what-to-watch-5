import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          films.map((film, index) => (
            <SmallMovieCard key={`${film}-${index}`} film={film} />
          ))
        }
      </div>
    );
  }
}

export default MoviesList;

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
