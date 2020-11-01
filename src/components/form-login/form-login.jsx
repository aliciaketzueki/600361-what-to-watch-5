import React from "react";
import {validFunc, validString} from "../../utils/props";

const FormLogin = (props) => {
  const {handleSubmit, handleFieldChange, email, password} = props;

  return (
    <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
      {/* ERROR MESSAGE */}
      <div className="sign-in__message">
        <p>Please enter a valid email address</p>
      </div>
      {/* SIGN-IN MESSAGE */}
      <div className="sign-in__message">
        <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
      </div>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="email"
            id="email"
            onChange={handleFieldChange}
            value={email} />
          <label className="sign-in__label visually-hidden" htmlFor="email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleFieldChange}
            value={password} />
          <label className="sign-in__label visually-hidden" htmlFor="password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
};

FormLogin.propTypes = {
  handleSubmit: validFunc,
  handleFieldChange: validFunc,
  email: validString,
  password: validString
};

export default FormLogin;
