import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list";
import {BrowserRouter} from "react-router-dom";
import {FILMS, FILMS_RENDERED} from "../../mocks";

describe(`Render MoviesList`, () => {
  it(`Should MoviesList render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MoviesList
              films={FILMS}
              filmsRendered={FILMS_RENDERED}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
