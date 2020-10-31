import React from "react";
import {NavLink} from "react-router-dom";
import {validFunc, validArrayOfShape, validNum} from "../../utils/props";

const Tabs = (props) => {
  const {tabs, reviews, tabIndex, renderSwitch, onTabLinkClick} = props;

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
                  to="#"
                  className="movie-nav__link"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onTabLinkClick(index);
                  }}
                >
                  {tab.name}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>

      {renderSwitch(reviews)}
    </div>
  );
};

Tabs.propTypes = {
  onTabLinkClick: validFunc,
  tabs: validArrayOfShape,
  reviews: validArrayOfShape,
  tabIndex: validNum,
  renderSwitch: validFunc
};

export default Tabs;
