import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FormAddReview} from "./form-add-review";
import {NOOP, COMMENT, FILM_ID} from "../../mocks";
import {SHORT_TIMEOUT} from "../../utils/const";

configure({adapter: new Adapter()});

describe(`Change FormAddReview`, () => {
  // Изменение textarea
  test.each([
    [`with`, true],
    [`without`, false],
  ])(
      `%s validation`,
      (_expected, isValid) => {
        const handleCheckValid = jest.fn();

        const wrapper = shallow(
            <FormAddReview
              checkValid={handleCheckValid}
              onSubmit={NOOP}
              filmId={FILM_ID}
              formValid={isValid}
            />
        );

        const textarea = wrapper.find(`.add-review__textarea`);

        expect(textarea.text()).toEqual(``);
        textarea.simulate(`change`, {target: {value: COMMENT}});
        expect(handleCheckValid).toHaveBeenCalledTimes(1);

        setTimeout(() => {
          expect(textarea.text()).toEqual(COMMENT);

          wrapper.unmount();
        }, SHORT_TIMEOUT);
      });

  // Изменение рейтинга
  test.each([
    [`with`, true],
    [`without`, false],
  ])(
      `%s validation`,
      (_expected, isValid) => {
        const wrapper = shallow(
            <FormAddReview
              checkValid={NOOP}
              onSubmit={NOOP}
              filmId={FILM_ID}
              formValid={isValid}
            />
        );

        const defaultRating = 2;
        const changedRating = 3;

        const ratingInput = wrapper.find(`.rating__input`).at(defaultRating);
        const changedInput = wrapper.find(`.rating__input`).at(changedRating);

        expect(ratingInput.prop(`defaultChecked`)).toEqual(`checked`);
        changedInput.simulate(`change`, {target: {value: ratingInput.prop(`value`)}});


        setTimeout(() => {
          expect(ratingInput.prop(`defaultChecked`)).toEqual(false);
          expect(changedInput.prop(`defaultChecked`)).toEqual(`checked`);

          wrapper.unmount();
        }, SHORT_TIMEOUT);
      });

  // Отправка формы
  it(`Should FormAddReview be submited`, () => {
    const handleOnSubmit = jest.fn();

    const wrapper = shallow(
        <FormAddReview
          checkValid={NOOP}
          onSubmit={handleOnSubmit}
          filmId={FILM_ID}
          formValid={true}
        />
    );

    wrapper.find(`.add-review__form`).simulate(`submit`, {
      preventDefault: NOOP,
      stopPropagation: NOOP
    });
    expect(handleOnSubmit).toHaveBeenCalledTimes(1);
  });
});
