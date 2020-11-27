import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FormLogin} from "./form-login";
import {noop, formErrors} from "./form-login.test";

configure({adapter: new Adapter()});

describe(`Change FormLogin`, () => {
  // Изменение input'а email
  test.each([
    [`with`, true],
    [`without`, false],
  ])(
      `%s validation`,
      (_expected, isValid) => {
        const handleEmailChange = jest.fn();
        const handleCheckValid = jest.fn();

        const wrapper = shallow(
            <FormLogin
              email={`kate@mail.ru`}
              password={`12345`}
              emailValid={true}
              passwordValid={true}
              formErrors={formErrors}
              formValid={isValid}
              handleSubmit={noop}
              handleFieldChange={handleEmailChange}
              checkValid={handleCheckValid}
              onSubmit={noop}
            />
        );

        wrapper.find(`.sign-in__input`).at(0).simulate(`change`);
        expect(handleEmailChange).toHaveBeenCalledTimes(1);
        expect(handleCheckValid).toHaveBeenCalledTimes(1);
      });

  // Изменение input'а пароля
  test.each([
    [`with`, true],
    [`without`, false],
  ])(
      `%s validation`,
      (_expected, isValid) => {
        const handlePasswordChange = jest.fn();
        const handleCheckValid = jest.fn();

        const wrapper = shallow(
            <FormLogin
              email={``}
              password={``}
              emailValid={true}
              passwordValid={true}
              formErrors={formErrors}
              formValid={isValid}
              handleSubmit={noop}
              handleFieldChange={handlePasswordChange}
              checkValid={handleCheckValid}
              onSubmit={noop}
            />
        );

        wrapper.find(`.sign-in__input`).at(1).simulate(`change`);
        expect(handlePasswordChange).toHaveBeenCalledTimes(1);
        expect(handleCheckValid).toHaveBeenCalledTimes(1);
      });

  // Отправка формы
  it(`Should FormLogin be submited`, () => {
    const handleSubmitForm = jest.fn();
    const handleOnSubmit = jest.fn();

    const wrapper = shallow(
        <FormLogin
          email={``}
          password={``}
          emailValid={false}
          passwordValid={false}
          formErrors={formErrors}
          formValid={true}
          handleSubmit={ handleSubmitForm}
          handleFieldChange={noop}
          checkValid={noop}
          onSubmit={handleOnSubmit}
        />
    );

    wrapper.find(`.sign-in__form`).simulate(`submit`);
    expect(handleSubmitForm).toHaveBeenCalledTimes(1);
    expect(handleOnSubmit).toHaveBeenCalledTimes(1);
  });
});
