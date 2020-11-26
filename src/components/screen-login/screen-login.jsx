import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import FormLogin from "../form-login/form-login";
import withChangingForm from "../../hocs/with-changing-form/with-changing-form";
import withValidation from "../../hocs/with-validation/with-validation";
const LoginFormWrapper = withValidation(withChangingForm(FormLogin));

const Login = () => {
  return (
    <div className="user-page">
      <Header
        header={{
          headClass: `user-page__head`,
          title: `Sign in`
        }}
        film={null}
      />

      <div className="sign-in user-page__content">
        <LoginFormWrapper />
      </div>

      <Footer />
    </div>
  );
};

export default Login;
