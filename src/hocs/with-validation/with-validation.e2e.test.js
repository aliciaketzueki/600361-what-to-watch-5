import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withValidation from "./with-validation";
import {Errors} from "../../utils/const";
import {MOCK_COMPONENT} from "../../mocks";

configure({adapter: new Adapter()});

const MockComponentWrapped = withValidation(MOCK_COMPONENT);

describe(`Change state after form errors`, () => {
  it(`Should state changing depending on form errors`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );

    // Ошибка email
    expect(wrapper.state().formErrors.email).toEqual(``);
    wrapper.instance().validateField(`email`, `2321`);
    expect([
      wrapper.state().formErrors.email,
      wrapper.state().emailValid,
    ]).toEqual([
      Errors.EMAIL,
      false,
    ]);

    // Ошибка пароля
    expect(wrapper.state().formErrors.password).toEqual(``);
    wrapper.instance().validateField(`password`, `123`);
    expect([
      wrapper.state().formErrors.password,
      wrapper.state().passwordValid,
    ]).toEqual([
      Errors.PASSWORD,
      false,
    ]);

    // Ошибка комментария
    expect(wrapper.state().formErrors.textReview).toEqual(``);
    wrapper.instance().validateField(`textReview`, `123`);
    expect([
      wrapper.state().formErrors.textReview,
      wrapper.state().commentValid,
    ]).toEqual([
      Errors.TEXT_REVIEW,
      false,
    ]);
  });
});
