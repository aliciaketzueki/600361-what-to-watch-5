import React from "react";
import {NavLink} from "react-router-dom";
import {validFunc, validArrayOfShape, validNum, validFilm} from "../../utils/props";
import {tabs} from "../../utils/const";
import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";

const Tabs = (props) => {
  const {reviews, tabIndex, onClick, film} = props;

  console.log(`tabs film`, film);

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
                    onClick(index);
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
  onClick: validFunc,
  reviews: validArrayOfShape,
  tabIndex: validNum,
  film: validFilm
};

export default Tabs;
