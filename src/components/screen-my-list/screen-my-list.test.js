import React from "react";
import renderer from "react-test-renderer";
import {MyList} from "./screen-my-list";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../index";
import {FILMS, NOOP} from "../../mocks";

describe(`Render MyList`, () => {
  it(`Should MyList render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <MyList
              films={FILMS}
              loadFavourites={NOOP}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
