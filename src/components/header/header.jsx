import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Header = (props) => {
  const {header, history} = props;
  const {title, headClass, nav, login} = header;

  const onLoginClick = () => {
    history.push(`/login`);
  };

  return (
    <header className={`page-header ${headClass}`}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {title ? <h1 className="page-title user-page__title">{title}</h1> : ``}

      {nav ?
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>
        : ``
      }

      {login ?
        <div className="user-block">
          <div className="user-block__avatar" onClick={onLoginClick}>
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
        : ``
      }

    </header>
  );
};

export default Header;

Header.propTypes = {
  header: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};
