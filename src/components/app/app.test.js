import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {Router as BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import browserHistory from "../../browser-history";
import {store} from "../../index";

describe(`Render App`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <App />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

// npm run test.jest -s -- -t 'Render App'
// npm run test.jest -- -u
