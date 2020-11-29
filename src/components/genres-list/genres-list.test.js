import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list";
import {BrowserRouter} from "react-router-dom";
import {ALL_GENRES} from "../../utils/const";
import {NOOP, GENRES_LIST} from "../../mocks";

describe(`Render GenresList`, () => {
  it(`Should GenresList render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <GenresList
              genres={GENRES_LIST}
              onGenreClick={NOOP}
              activeGenre={ALL_GENRES}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
