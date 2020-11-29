import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./screen-add-review";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../index";
import {FILM, NOOP, FILM_ID} from "../../mocks";

describe(`Render AddReview`, () => {
  it(`Should AddReview render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <AddReview
              film={FILM}
              filmId={FILM_ID}
              loadCurrentFilm={NOOP}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
