import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";
import {BrowserRouter} from "react-router-dom";

describe(`Render Footer`, () => {
  it(`Should Footer render correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
