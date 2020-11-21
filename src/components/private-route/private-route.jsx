import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus, AppRoute} from "../../utils/const";
import {getAuthorizationStatus} from "../../store/selectors";
import {validString, validBool, validFunc} from "../../utils/props";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

PrivateRoute.propTypes = {
  authorizationStatus: validString,
  exact: validBool,
  path: validString,
  render: validFunc,
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
