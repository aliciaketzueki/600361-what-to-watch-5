import React from "react";
import {connect} from "react-redux";
import {redirectToRoute} from "../../store/actions/action";
import {addToMyList, fetchFilm, fetchPromoFilm} from "../../store/actions/api-actions";
import {getAuthorizationStatus} from "../../store/selectors";
import {AuthorizationStatus, AppRoute} from "../../utils/const";
import {validFilm, validString, validFunc} from "../../utils/props";

const MyListBtn = (props) => {
  const {film, addFilm, authStatus, moveToPage} = props;
  const {id, isFavorite} = film;

  const handleBtn = () => {
    if (authStatus === AuthorizationStatus.NO_AUTH) {
      moveToPage(AppRoute.LOGIN);
    } else {
      addFilm(id, isFavorite ? 0 : 1);
    }
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={handleBtn}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? `#in-list` : `#add`} />
      </svg>
      <span>My list</span>
    </button>
  );
};

MyListBtn.propTypes = {
  film: validFilm,
  addFilm: validFunc,
  authStatus: validString,
  moveToPage: validFunc
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  addFilm(id, status) {
    dispatch(addToMyList(id, status));
    dispatch(fetchFilm(id));
    dispatch(fetchPromoFilm(id));
  },
  moveToPage(route) {
    dispatch(redirectToRoute(route));
  }
});

export {MyListBtn};
export default connect(mapStateToProps, mapDispatchToProps)(MyListBtn);
