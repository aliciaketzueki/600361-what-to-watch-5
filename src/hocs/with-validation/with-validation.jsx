import React, {PureComponent} from "react";
import {Validation, Errors} from "../../utils/const";

const withValidation = (Component) => {
  class WithValidation extends PureComponent {
    constructor(props) {
      super(props);

      this.history = this.props;

      this.state = {
        formErrors: {
          email: ``,
          password: ``,
          textReview: ``,
        },
        emailValid: true,
        passwordValid: true,
        commentValid: true,
        formValid: false
      };

      this.checkValid = this.checkValid.bind(this);
      this.validateField = this.validateField.bind(this);
    }

    validateField(fieldName, value) {
      let {formErrors, emailValid, passwordValid, commentValid} = this.state;
      const {EMAIL, PASSWORD, COMMENT_MAX, COMMENT_MIN} = Validation;

      switch (fieldName) {
        case `email`:
          emailValid = EMAIL.test(value);
          formErrors.email = emailValid ? `` : Errors.EMAIL;
          break;
        case `password`:
          passwordValid = value.length >= PASSWORD;
          formErrors.password = passwordValid ? `` : Errors.PASSWORD;
          break;
        case `textReview`:
          commentValid = (value.length >= COMMENT_MIN && value.length <= COMMENT_MAX);
          formErrors.textReview = commentValid ? `` : Errors.TEXT_REVIEW;
          break;
        default:
          break;
      }

      this.setState({
        formErrors,
        emailValid,
        passwordValid,
        commentValid
      }, this.validateForm);
    }

    validateForm() {
      this.setState({
        formValid: this.state.emailValid && this.state.passwordValid && this.state.commentValid
      });
    }

    checkValid(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value}, () => this.validateField(name, value)
      );
    }

    render() {
      const {emailValid, passwordValid, commentValid, formErrors, formValid} = this.state;

      return (
        <Component
          {...this.props}
          emailValid={emailValid}
          passwordValid={passwordValid}
          commentValid={commentValid}
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
