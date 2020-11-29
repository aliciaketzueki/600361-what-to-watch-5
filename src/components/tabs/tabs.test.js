import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {BrowserRouter} from "react-router-dom";
import {FILM, REVIEWS} from "../../mocks";

describe(`Render Tabs`, () => {
  it(`Should Tabs render correctly`, () => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <Tabs
            reviews={REVIEWS}
            film={FILM}
          />
        </BrowserRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
