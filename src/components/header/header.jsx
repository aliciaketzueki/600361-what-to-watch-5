import React from "react";
import {Link} from "react-router-dom";
import {validShape, validString, validFunc} from "../../utils/props";
import {AuthorizationStatus, AppRoute} from "../../utils/const";
import {connect} from "react-redux";
import {getAuthorizationStatus, getUserData} from "../../store/selectors";
import {redirectToRoute} from "../../store/actions/action";
import PropTypes from "prop-types";

const Header = (props) => {
  const {header, login, userData, film, moveToPage} = props;
  const {title, headClass, nav} = header;
  const {avatarUrl} = userData;

  const onLoginClick = () => {
    moveToPage(AppRoute.MY_LIST);
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
              <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
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
              <img src={avatarUrl} alt="User avatar" width="63" height="63" />
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
  login: getAuthorizationStatus(state),
  userData: getUserData(state)
});

const mapDispatchToProps = (dispatch) => ({
  moveToPage(route) {
    dispatch(redirectToRoute(route));
  }
});

Header.propTypes = {
  header: validShape,
  userData: validShape,
  login: validString,
  moveToPage: validFunc,
  film: PropTypes.shape(),
};

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
