import React from "react";
import renderer from "react-test-renderer";
import {Player} from "./screen-player";
import {BrowserRouter} from "react-router-dom";
import {FILM, NOOP, FILM_ID} from "../../mocks";

describe(`Render Player`, () => {
  it(`Should Player render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Player
              film={FILM}
              loadCurrentFilm={NOOP}
              filmId={FILM_ID}
              onExitBtnClick={NOOP}
            />
          </BrowserRouter>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
