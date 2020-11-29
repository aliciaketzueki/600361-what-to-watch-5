import React from "react";
import renderer from "react-test-renderer";
import MovieCardPoster from "./movie-card-poster";
import {FILM} from "../../mocks";

describe(`Render MovieCardPoster`, () => {
  test.each([
    [`big`, `big`],
    [`small`, `small`],
    [`without classname`, ``],
  ])(`%s auth`, (_expected, classname) => {
    const tree = renderer
    .create(
        <MovieCardPoster
          film={FILM}
          classname={classname}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
