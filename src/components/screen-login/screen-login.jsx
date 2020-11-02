import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import FormLogin from "../form-login/form-login";
import {validShape} from "../../utils/props";

import withChangingForm from "../../hocs/with-changing-form/with-changing-form";
const LoginFormWrapper = withChangingForm(FormLogin);

const Login = (props) => {
  const {header, history} = props;

  return (
    <div className="user-page">
      <Header header={header} history={history} />

      <div className="sign-in user-page__content">
        <LoginFormWrapper />
      </div>

      <Footer />
    </div>
  );
};

Login.propTypes = {
  header: validShape,
  history: validShape,
};

export default Login;
