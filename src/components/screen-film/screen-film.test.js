import React from "react";
import renderer from "react-test-renderer";
import {Film} from "./screen-film";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../index";
import {FILM, FILMS, NOOP, FILM_ID, REVIEWS} from "../../mocks";

describe(`Render Film`, () => {
  it(`Should Film render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Film
              films={FILMS}
              filmId={FILM_ID}
              loadCurrentFilm={NOOP}
              film={FILM}
              reviews={REVIEWS}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
