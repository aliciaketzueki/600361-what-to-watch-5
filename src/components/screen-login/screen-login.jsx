import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import FormLogin from "../form-login/form-login";
import {validShape} from "../../utils/props";

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
  header: validShape,
  history: validShape,
};

export default Login;
