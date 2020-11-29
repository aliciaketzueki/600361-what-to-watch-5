import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FormLogin} from "./form-login";
import {Errors, SHORT_TIMEOUT} from "../../utils/const";
import {NOOP, MOCK_EMAIL, MOCK_PASSWORD} from "../../mocks";

configure({adapter: new Adapter()});

describe(`Change FormLogin`, () => {
  // Изменение input'а email
  test.each([
    [`with`, true],
    [`without`, false],
  ])(
      `%s validation`,
      (_expected, isValid) => {
        const handleCheckValid = jest.fn();

        const wrapper = shallow(
            <FormLogin
              emailValid={true}
              passwordValid={true}
              formErrors={Errors}
              formValid={isValid}
              checkValid={handleCheckValid}
              onSubmit={NOOP}
            />
        );

        const emailInput = wrapper.find(`.sign-in__input`).at(0);

        expect(emailInput.text()).toEqual(``);
        emailInput.simulate(`change`, {target: {value: MOCK_EMAIL}});
        expect(handleCheckValid).toHaveBeenCalledTimes(1);

        setTimeout(() => {
          expect(emailInput.text()).toEqual(MOCK_EMAIL);

          wrapper.unmount();
        }, SHORT_TIMEOUT);
      });

  // Изменение input'а пароля
  test.each([
    [`with`, true],
    [`without`, false],
  ])(
      `%s validation`,
      (_expected, isValid) => {
        const handleCheckValid = jest.fn();

        const wrapper = shallow(
            <FormLogin
              emailValid={true}
              passwordValid={true}
              formErrors={Errors}
              formValid={isValid}
              checkValid={handleCheckValid}
              onSubmit={NOOP}
            />
        );

        const passwordInput = wrapper.find(`.sign-in__input`).at(1);

        expect(passwordInput.text()).toEqual(``);
        passwordInput.simulate(`change`, {target: {value: MOCK_PASSWORD}});
        expect(handleCheckValid).toHaveBeenCalledTimes(1);

        setTimeout(() => {
          expect(passwordInput.text()).toEqual(MOCK_PASSWORD);

          wrapper.unmount();
        }, SHORT_TIMEOUT);
      });

  // Отправка формы
  it(`Should FormLogin be submited`, () => {
    const handleOnSubmit = jest.fn();

    const wrapper = shallow(
        <FormLogin
          emailValid={false}
          passwordValid={false}
          formErrors={Errors}
          formValid={true}
          checkValid={NOOP}
          onSubmit={handleOnSubmit}
        />
    );

    wrapper.find(`.sign-in__form`).simulate(`submit`, {
      preventDefault: NOOP,
      stopPropagation: NOOP
    });
    expect(handleOnSubmit).toHaveBeenCalledTimes(1);
  });
});
