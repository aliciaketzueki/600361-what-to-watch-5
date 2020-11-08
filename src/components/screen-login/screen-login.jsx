import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import FormLogin from "../form-login/form-login";
import {validShape} from "../../utils/props";

import withChangingForm from "../../hocs/with-changing-form/with-changing-form";
const LoginFormWrapper = withChangingForm(FormLogin);

const Login = (props) => {
  const {history} = props;

  return (
    <div className="user-page">
      <Header
        header={{
          headClass: `user-page__head`,
          title: `Sign in`
        }}
        history={history}
      />

      <div className="sign-in user-page__content">
        <LoginFormWrapper />
      </div>

      <Footer />
    </div>
  );
};

Login.propTypes = {
  history: validShape,
};

export default Login;
