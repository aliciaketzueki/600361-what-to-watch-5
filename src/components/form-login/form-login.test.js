import React from "react";
import renderer from "react-test-renderer";
import {FormLogin} from "./form-login";
import {Validation} from "../../utils/const";
const {PASSWORD, COMMENT_MAX, COMMENT_MIN} = Validation;

const noop = () => {};

const formErrors = {
  email: `Please enter a valid email address`,
  password: `Password must be at least ${PASSWORD} characters`,
  textReview: `Review text must be at least ${COMMENT_MIN} and no more than ${COMMENT_MAX} characters`,
};

describe(`Render FormLogin`, () => {
  test.each([
    [`with`, true],
    [`without`, false],
  ])(`%s validation`, (_expected, isValid) => {
    const tree = renderer
      .create(
          <FormLogin
            email={`aliciaketzueki@gmail.com`}
            password={`12345678990`}
            emailValid={true}
            passwordValid={true}
            formErrors={formErrors}
            formValid={isValid}
            handleSubmit={noop}
            handleFieldChange={noop}
            checkValid={noop}
            onSubmit={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
