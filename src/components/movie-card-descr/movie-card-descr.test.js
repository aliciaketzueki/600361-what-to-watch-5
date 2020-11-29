import React from "react";
import renderer from "react-test-renderer";
import MovieCardDescr from "./movie-card-descr";
import {BrowserRouter} from "react-router-dom";
import {FILM} from "../../mocks";

jest.mock(`../video-btn/video-btn`, () => `VideoBtn`);
jest.mock(`../my-list-btn/my-list-btn`, () => `MyListBtn`);

describe(`Render MovieCardDescr`, () => {
  it(`Should MovieCardDescr render correctly`, () => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <MovieCardDescr
            film={FILM}
          />
        </BrowserRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
