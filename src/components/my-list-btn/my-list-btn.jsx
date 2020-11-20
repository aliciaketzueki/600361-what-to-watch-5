import React from "react";
import {connect} from "react-redux";
import {addToMyList} from "../../store/actions/api-actions";
import {getAuthorizationStatus} from "../../store/selectors";
import {AuthorizationStatus, AppRoute} from "../../utils/const";
import {validFilm, validShape, validString, validFunc} from "../../utils/props";

const MyListBtn = (props) => {
  const {film, addFilm, authStatus, history} = props;
  const {id, isFavorite} = film;

  const handleBtn = () => {
    if (authStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.LOGIN);
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

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  addFilm(id, status) {
    dispatch(addToMyList(id, status));
  }
});

MyListBtn.propTypes = {
  history: validShape,
  film: validFilm,
  addFilm: validFunc,
  authStatus: validString
};

export {MyListBtn};
export default connect(mapStateToProps, mapDispatchToProps)(MyListBtn);
