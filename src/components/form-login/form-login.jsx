import React, {useState} from "react";
import {validFunc, validShape, validBool} from "../../utils/props";
import {connect} from "react-redux";
import {login} from "../../store/actions/api-actions";
import {getUserStatus} from "../../store/selectors";
import PropTypes from "prop-types";

const FormLogin = (props) => {
  const {emailValid, passwordValid, formErrors, formValid, checkValid, onSubmit, status} = props;
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  return (
    <form action="#" className="sign-in__form" onSubmit={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onSubmit({email, password});
    }}
    >
      {
        <div className="sign-in__message">
          {status &&
            `Registration error: ${status.status} ${status.statusText}`
          }
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
              setEmail(e.target.value);
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
              setPassword(e.target.value);
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

FormLogin.propTypes = {
  onSubmit: validFunc,
  checkValid: validFunc,
  formErrors: validShape,
  emailValid: validBool,
  passwordValid: validBool,
  formValid: validBool,
  status: PropTypes.shape()
};

const mapStateToProps = (state) => ({
  status: getUserStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {FormLogin};
export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
