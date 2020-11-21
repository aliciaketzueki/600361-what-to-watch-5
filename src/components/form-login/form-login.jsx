import React from "react";
import {validFunc, validString, validShape, validBool} from "../../utils/props";
import {connect} from "react-redux";
import {login, checkAuth} from "../../store/actions/api-actions";

const FormLogin = (props) => {
  const {email, password, emailValid, passwordValid, formErrors, formValid, handleSubmit, handleFieldChange, checkValid, onSubmit, isAuth} = props;

  return (
    <form action="#" className="sign-in__form" onSubmit={(e) => {
      handleSubmit(e);
      onSubmit({email, password});
    }}
    >
      {
        <div className="sign-in__message">
          {
            Object.keys(formErrors).map((fieldName, i) => {
              if (formErrors[fieldName].length > 0) {
                return (
                  <p key={i}>{formErrors[fieldName]}</p>
                );
              } else {
                return ``;
              }
            })
          }
          {/* {
            !isAuth() &&
            <p>We can’t recognize this email and password combination. Please try again.</p>
          } */}
        </div>
      }

      <div className="sign-in__fields">
        <div className={`sign-in__field ${!emailValid ? `sign-in__field--error` : ``}`}>
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              handleFieldChange(e);
              checkValid(e);
            }}
          />
          <label className="sign-in__label visually-hidden" htmlFor="email">Email address</label>
        </div>
        <div className={`sign-in__field ${!passwordValid ? `sign-in__field--error` : ``}`}>
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              handleFieldChange(e);
              checkValid(e);
            }}
          />
          <label className="sign-in__label visually-hidden" htmlFor="password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button
          className="sign-in__btn"
          type="submit"
          disabled={!formValid}
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  isAuth() {
    dispatch(checkAuth());
  },
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

FormLogin.propTypes = {
  onSubmit: validFunc,
  handleSubmit: validFunc,
  handleFieldChange: validFunc,
  checkValid: validFunc,
  email: validString,
  password: validString,
  formErrors: validShape,
  emailValid: validBool,
  passwordValid: validBool,
  formValid: validBool,
};

export {FormLogin};
export default connect(null, mapDispatchToProps)(FormLogin);
