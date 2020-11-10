import React, {PureComponent} from "react";
import {Validation} from "../../utils/const";

const withValidation = (Component) => {
  class WithValidation extends PureComponent {
    constructor(props) {
      super(props);

      this.history = this.props;

      this.state = {
        formErrors: {
          email: ``,
          password: ``
        },
        emailValid: true,
        passwordValid: true,
        formValid: false
      };

      this.checkValid = this.checkValid.bind(this);
      this.validateField = this.validateField.bind(this);
    }

    validateField(fieldName, value) {
      let {formErrors, emailValid, passwordValid} = this.state;

      switch (fieldName) {
        case `email`:
          emailValid = value.match(Validation.EMAIL);
          formErrors.email = emailValid ? `` : `Please enter a valid email address`;
          break;
        case `password`:
          passwordValid = value.length >= Validation.PASSWORD;
          formErrors.password = passwordValid ? `` : `Password must be at least ${Validation.PASSWORD} characters`;
          break;
        default:
          break;
      }

      this.setState({
        formErrors,
        emailValid,
        passwordValid
      }, this.validateForm);
    }

    validateForm() {
      this.setState({
        formValid: this.state.emailValid && this.state.passwordValid
      });
    }

    checkValid(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value}, () => this.validateField(name, value)
      );
    }

    render() {
      const {emailValid, passwordValid, formErrors, formValid} = this.state;

      return (
        <Component
          {...this.props}
          emailValid={emailValid}
          passwordValid={passwordValid}
          formValid={formValid}
          formErrors={formErrors}
          checkValid={this.checkValid}
        />
      );
    }
  }

  return WithValidation;
};

export default withValidation;
