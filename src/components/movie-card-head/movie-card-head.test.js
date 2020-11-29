import React from "react";
import renderer from "react-test-renderer";
import MovieCardHead from "./movie-card-head";
import {BrowserRouter} from "react-router-dom";
import {FILM} from "../../mocks";

jest.mock(`../header/header`, () => `Header`);

describe(`Render MovieCardHead`, () => {
  test.each([
    [`with`, true],
    [`without`, false],
  ])(`%s header nav`, (_expected, headerNav) => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <MovieCardHead
            film={FILM}
            headerNav={headerNav}
          />
        </BrowserRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
