import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./screen-main";
import {BrowserRouter} from "react-router-dom";
import {FILM} from "../../mocks";

jest.mock(`../big-movie-card/big-movie-card`, () => `BigMovieCard`);
jest.mock(`../footer/footer`, () => `Footer`);
jest.mock(`../movies-by-genres/movies-by-genres`, () => `MoviesByGenres`);

describe(`Render Main`, () => {
  it(`Render Main`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Main
              promoFilm={FILM}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

