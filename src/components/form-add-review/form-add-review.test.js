import React from "react";
import renderer from "react-test-renderer";
import {FormAddReview} from "./form-add-review";

const noop = () => {};

describe(`Render FormAddReview`, () => {
  test.each([
    [`with`, true],
    [`without`, false],
  ])(`%s validation`, (_expected, isValid) => {
    const tree = renderer
      .create(
          <FormAddReview
            rating={`5`}
            textReview={`Текст комментария в форме`}
            handleSubmit={noop}
            handleFieldChange={noop}
            checkValid={noop}
            onSubmit={noop}
            filmId={1}
            formValid={isValid}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
