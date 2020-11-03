import React from "react";
import {NavLink} from "react-router-dom";
import {validFunc, validArrayOfShape, validNum, validPromoFilm} from "../../utils/props";
import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";

const Tabs = (props) => {
  const {tabs, reviews, tabIndex, onClick, promoFilm} = props;

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
        tabIndex === 0 && <TabOverview promoFilm={promoFilm} /> ||
        tabIndex === 1 && <TabDetails /> ||
        tabIndex === 2 && <TabReviews reviews={reviews} />
      }
    </div>
  );
};

Tabs.propTypes = {
  onClick: validFunc,
  tabs: validArrayOfShape,
  reviews: validArrayOfShape,
  tabIndex: validNum,
  promoFilm: validPromoFilm
};

export default Tabs;
