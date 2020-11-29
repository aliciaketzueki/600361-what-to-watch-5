import React from "react";
import renderer from "react-test-renderer";
import {FormLogin} from "./form-login";
import {Errors} from "../../utils/const";
import {NOOP} from "../../mocks";

describe(`Render FormLogin`, () => {
  test.each([
    [`with`, true],
    [`without`, false],
  ])(`%s validation`, (_expected, isValid) => {
    const tree = renderer
      .create(
          <FormLogin
            emailValid={true}
            passwordValid={true}
            formErrors={Errors}
            formValid={isValid}
            checkValid={NOOP}
            onSubmit={NOOP}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
