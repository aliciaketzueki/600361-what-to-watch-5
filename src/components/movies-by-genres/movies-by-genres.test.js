import React from "react";
import renderer from "react-test-renderer";
import {MoviesByGenres} from "./movies-by-genres";
import {BrowserRouter} from "react-router-dom";
import {FILMS, GENRES_LIST, FILMS_RENDERED} from "../../mocks";

jest.mock(`../movies-list/movies-list`, () => `MoviesList`);
jest.mock(`../genres-list/genres-list`, () => `GenresList`);
jest.mock(`../show-more/show-more`, () => `ShowMore`);

describe(`Render MoviesByGenres`, () => {
  it(`Should MoviesByGenres render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MoviesByGenres
              films={FILMS}
              genres={GENRES_LIST}
              filmsRendered={FILMS_RENDERED}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

