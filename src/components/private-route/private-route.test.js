import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route";
import {AppRoute} from "../../utils/const";
import {BrowserRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../utils/const";

const MockComponent = () => <div />;

describe(`Render PrivateRoute`, () => {
  test.each([
    [`with`, AuthorizationStatus.AUTH],
    [`without`, AuthorizationStatus.NO_AUTH],
  ])(`%s auth`, (_expected, login) => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <PrivateRoute
            render={MockComponent}
            path={AppRoute.ROOT}
            authorizationStatus={login}
          />
        </BrowserRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
