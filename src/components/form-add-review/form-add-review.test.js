import React from "react";
import renderer from "react-test-renderer";
import {FormAddReview} from "./form-add-review";

export const noop = () => {};

describe(`Render FormAddReview`, () => {
  test.each([
    [`with`, true],
    [`without`, false],
  ])(`%s validation`, (_expected, isValid) => {
    const tree = renderer
      .create(
          <FormAddReview
            rating={``}
            textReview={``}
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
