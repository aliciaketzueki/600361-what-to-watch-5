import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FormAddReview} from "./form-add-review";

configure({adapter: new Adapter()});

const noop = () => {};

describe(`Change FormAddReview`, () => {
  // Изменение textarea
  test.each([
    [`with`, true],
    [`without`, false],
  ])(`%s validation`, (_expected, isValid) => {
    const handleTextareaChange = jest.fn();
    const handleCheckValid = jest.fn();

    const wrapper = shallow(
        <FormAddReview
          rating={`2`}
          textReview={`Текст комментария в форме`}
          handleSubmit={noop}
          handleFieldChange={handleTextareaChange}
          checkValid={handleCheckValid}
          onSubmit={noop}
          filmId={0}
          formValid={isValid}
        />
    );

    wrapper.find(`.add-review__textarea`).simulate(`change`);
    expect(handleTextareaChange).toHaveBeenCalledTimes(1);
    expect(handleCheckValid).toHaveBeenCalledTimes(1);
  });

  // Изменение рейтинга
  test.each([
    [`with`, true],
    [`without`, false],
  ])(`%s validation`, (_expected, isValid) => {
    const handleRatingChange = jest.fn();

    const wrapper = shallow(
        <FormAddReview
          rating={`5`}
          textReview={`Текст комментария в форме`}
          handleSubmit={noop}
          handleFieldChange={handleRatingChange}
          checkValid={noop}
          onSubmit={noop}
          filmId={0}
          formValid={isValid}
        />
    );

    wrapper.find(`#star-1`).simulate(`change`);
    expect(handleRatingChange).toHaveBeenCalledTimes(1);
  });

  // Отправка формы
  it(`Should FormAddReview be submited`, () => {
    const handleSubmitForm = jest.fn();
    const handleCheckValid = jest.fn();

    const wrapper = shallow(
        <FormAddReview
          rating={`5`}
          textReview={`Текст комментария в форме`}
          handleSubmit={handleSubmitForm}
          handleFieldChange={noop}
          checkValid={handleCheckValid}
          onSubmit={handleSubmitForm}
          filmId={0}
          formValid={true}
        />
    );

    wrapper.find(`.add-review__form`).simulate(`submit`);
    expect(handleSubmitForm).toHaveBeenCalledTimes(2);
    expect(handleCheckValid).toHaveBeenCalledTimes(0);
  });
});
