import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route";
import {BrowserRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../utils/const";
import {MOCK_COMPONENT, URL} from "../../mocks";

describe(`Render PrivateRoute`, () => {
  test.each([
    [`with`, AuthorizationStatus.AUTH],
    [`without`, AuthorizationStatus.NO_AUTH],
  ])(`%s auth`, (_expected, login) => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <PrivateRoute
            render={MOCK_COMPONENT}
            path={URL}
            authorizationStatus={login}
          />
        </BrowserRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
