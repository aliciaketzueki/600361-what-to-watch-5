import React from "react";
import renderer from "react-test-renderer";
import {FormAddReview} from "./form-add-review";
import {NOOP, FILM_ID} from "../../mocks";

describe(`Render FormAddReview`, () => {
  test.each([
    [`with`, true],
    [`without`, false],
  ])(`%s validation`, (_expected, isValid) => {
    const tree = renderer
      .create(
          <FormAddReview
            checkValid={NOOP}
            onSubmit={NOOP}
            filmId={FILM_ID}
            formValid={isValid}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
