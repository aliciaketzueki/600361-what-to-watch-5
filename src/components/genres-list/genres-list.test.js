import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list";
import {BrowserRouter as Router} from "react-router-dom";

const noop = () => {};

const genres = ["All genres", "Crime"];

describe(`Render GenresList`, () => {
  it(`Should GenresList render correctly`, () => {
    const tree = renderer
      .create(
          <Router>
            <GenresList
              genres={genres}
              onGenreClick={noop}
              onClick={noop}
              activeGenre={`All genres`}
            />
          </Router>
        )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
