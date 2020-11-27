import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list";
import {BrowserRouter} from "react-router-dom";
import {ALL_GENRES} from "../../utils/const";

export const noop = () => {};

export const genres = [`All genres`, `Crime`];

describe(`Render GenresList`, () => {
  it(`Should GenresList render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <GenresList
              genres={genres}
              onGenreClick={noop}
              onClick={noop}
              activeGenre={ALL_GENRES}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
