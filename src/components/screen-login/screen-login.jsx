import React from "react";
import PropTypes from "prop-types";

import Header from "../header/header";
import Footer from "../footer/footer";
import FormLogin from "../form-login/form-login";

const Login = (props) => {
  const {header, history} = props;

  return (
    <div className="user-page">
      <Header header={header} history={history} />

      <div className="sign-in user-page__content">
        <FormLogin />
      </div>

      <Footer />
    </div>
  );
};

Login.propTypes = {
  header: PropTypes.shape(),
  history: PropTypes.shape().isRequired,
};

export default Login;
