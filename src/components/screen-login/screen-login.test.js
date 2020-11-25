import React from "react";
import renderer from "react-test-renderer";
import Login from "./screen-login";
import {Router as BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import browserHistory from "../../browser-history";
import {store} from "../../index";

describe(`Render Login`, () => {
  it(`Should Login render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <Login />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
