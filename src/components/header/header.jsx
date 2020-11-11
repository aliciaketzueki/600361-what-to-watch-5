import React from "react";
import {Link} from "react-router-dom";
import {validShape, validString} from "../../utils/props";
import {AuthorizationStatus, AppRoute} from "../../utils/const";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../store/selectors";

const Header = (props) => {
  const {header, history, login} = props;
  const {title, headClass, nav} = header;

  const onLoginClick = () => {
    history.push(AppRoute.MY_LIST);
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

      {title && <h1 className="page-title user-page__title">{title}</h1>}

      {nav &&
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
      }

      {
        login === AuthorizationStatus.AUTH &&
          <div className="user-block">
            <div className="user-block__avatar" onClick={onLoginClick}>
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        ||
        login === AuthorizationStatus.NO_AUTH &&
          <div className="user-block">
            <Link to="/login" className="user-block__link">Sign in</Link>
          </div>
      }

    </header>
  );
};


const mapStateToProps = (state) => ({
  login: getAuthorizationStatus(state)
});

Header.propTypes = {
  header: validShape,
  history: validShape,
  login: validString
};

export {Header};
export default connect(mapStateToProps)(Header);
