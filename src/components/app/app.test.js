import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

jest.mock(`../screen-main/screen-main`, () => `Main`);
jest.mock(`../screen-login/screen-login`, () => `Login`);
jest.mock(`../screen-my-list/screen-my-list`, () => `MyList`);
jest.mock(`../screen-film/screen-film`, () => `Film`);
jest.mock(`../screen-add-review/screen-add-review`, () => `AddReview`);
jest.mock(`../screen-player/screen-player`, () => `Player`);

describe(`Render App`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(
          <BrowserRouter history={browserHistory}>
            <App />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

// npm run test.jest -s -- -t 'Render App'
// npm run test.jest -- -u
