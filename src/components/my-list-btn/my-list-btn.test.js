import React from "react";
import renderer from "react-test-renderer";
import {MyListBtn} from "./my-list-btn";
import {AuthorizationStatus} from "../../utils/const";
import {FILM, NOOP} from "../../mocks";

describe(`Render MyListBtn`, () => {
  test.each([
    [`with`, AuthorizationStatus.AUTH],
    [`without`, AuthorizationStatus.NO_AUTH],
  ])(`%s auth`, (_expected, login) => {
    const tree = renderer
    .create(
        <MyListBtn
          film={FILM}
          addFilm={NOOP}
          authStatus={login}
          moveToPage={NOOP}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
