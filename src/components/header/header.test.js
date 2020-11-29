import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";
import {BrowserRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../utils/const";
import {FILM, USER_DATA, HEADER, NOOP} from "../../mocks";

describe(`Render Header`, () => {
  test.each([
    [`with`, AuthorizationStatus.AUTH],
    [`without`, AuthorizationStatus.NO_AUTH],
  ])(`%s auth`, (_expected, login) => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              header={HEADER}
              login={login}
              userData={USER_DATA}
              film={FILM}
              moveToPage={NOOP}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
