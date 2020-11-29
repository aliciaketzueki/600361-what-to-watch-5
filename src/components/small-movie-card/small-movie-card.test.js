import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";
import {BrowserRouter} from "react-router-dom";
import {FILM, NOOP} from "../../mocks";

describe(`Render SmallMovieCard`, () => {
  it(`Should SmallMovieCard render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <SmallMovieCard
              film={FILM}
              onMouseEnter={NOOP}
              onMouseLeave={NOOP}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
