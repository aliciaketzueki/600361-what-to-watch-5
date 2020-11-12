import React, { PureComponent } from "react";
import MovieCardHead from "../movie-card-head/movie-card-head";
import MovieCardDescr from "../movie-card-descr/movie-card-descr";
import {fetchFilm} from "../../store/actions/api-actions";
import {store} from "../../index";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import Tabs from "../tabs/tabs";
const TabSwitcher = withActiveItem(Tabs);

class BigMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  getFilm() {
    const id = this.props.match.params.id;

    Promise.all([
      store.dispatch(fetchFilm(id))
    ])
    .then(() => {
      this.setState({isLoaded: true})
    });
  }

  componentDidMount() {
    this.getFilm();
  }

  componentDidUpdate() {
    this.getFilm();
  }

  render() {
    const {reviews, history, isFull, film} = this.props;
    const {name, posterImage} = film;

    return (
      this.state.isLoaded &&
      <section className={`movie-card ${isFull ? "movie-card--full" : ""}`}>
        {
          isFull &&
          <React.Fragment>
            <div className="movie-card__hero">
              <MovieCardHead film={film} history={history} />

              <div className="movie-card__wrap">
                <MovieCardDescr film={film} history={history} />
              </div>
            </div>

            <div className="movie-card__wrap movie-card__translate-top">
              <div className="movie-card__info">
                <div className="movie-card__poster movie-card__poster--big">
                  <img src={posterImage} alt={name} width="218" height="327" />
                </div>

                <TabSwitcher reviews={reviews} film={film} />
              </div>
            </div>
          </React.Fragment>
          ||
          <React.Fragment>
            <MovieCardHead film={film} history={history} />

            <div className="movie-card__wrap">
              <div className="movie-card__info">
                <div className="movie-card__poster">
                  <img src={posterImage} alt={name + ` poster`} width="218" height="327" />
                </div>
                <MovieCardDescr film={film} history={history} />
              </div>
            </div>
          </React.Fragment>
        }
      </section>
    );
  }
};

export default BigMovieCard;
