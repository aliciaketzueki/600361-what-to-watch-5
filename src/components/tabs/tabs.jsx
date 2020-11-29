import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {validReviews, validFilm} from "../../utils/props";
import {tabs} from "../../utils/const";
import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";

const Tabs = (props) => {
  const {reviews, film} = props;
  const [tabIndex, setCount] = useState(0);

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            tabs.map((tab, index) => (
              <li
                className={`movie-nav__item ${tab.id === tabIndex ? `movie-nav__item--active` : ``}`}
                key={`${tab.name}-${tab.id}`}
              >
                <NavLink
                  to="/"
                  className="movie-nav__link"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCount(index);
                  }}
                >
                  {tab.name}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
      {
        tabIndex === 0 && <TabOverview film={film} /> ||
        tabIndex === 1 && <TabDetails film={film} /> ||
        tabIndex === 2 && <TabReviews reviews={reviews} />
      }
    </div>
  );
};

Tabs.propTypes = {
  reviews: validReviews,
  film: validFilm
};

export default Tabs;
