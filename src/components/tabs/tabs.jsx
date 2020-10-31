import React, {PureComponent} from "react";
import {NavLink} from "react-router-dom";
import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";
import {tabs} from "../../utils/const";
import {validArrayOfShape} from "../../utils/props";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: 0
    };
  }

  renderSwitch(index, props) {
    switch (index) {
      default:
      case 0:
        return <TabOverview />;
      case 1:
        return <TabDetails />;
      case 2:
        return <TabReviews reviews={props} />;
    }
  }

  render() {
    const {reviews} = this.props;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {
              tabs.map((tab, index) => (
                <li
                  className={`movie-nav__item ${index === this.state.tabIndex ? `movie-nav__item--active` : ``}`}
                  key={`${tab}-${index}`}
                >
                  <NavLink
                    to="#"
                    className="movie-nav__link"
                    onClick={() => {
                      this.setState({tabIndex: index});
                    }}
                  >
                    {tab}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>

        {this.renderSwitch(this.state.tabIndex, reviews)}
      </div>
    );
  }
}

Tabs.propTypes = {
  reviews: validArrayOfShape,
};

export default Tabs;
