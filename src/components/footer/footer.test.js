import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

describe(`Render Footer`, () => {
  it(`Should Footer render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter history={browserHistory}>
            <Footer />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
