import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list";
import {BrowserRouter as Router} from "react-router-dom";
import {ALL_GENRES} from "../../utils/const";

const noop = () => {};

const genres = [`All genres`, `Crime`];

describe(`Render GenresList`, () => {
  it(`Should GenresList render correctly`, () => {
    const tree = renderer
      .create(
          <Router>
            <GenresList
              genres={genres}
              onGenreClick={noop}
              onClick={noop}
              activeGenre={ALL_GENRES}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
