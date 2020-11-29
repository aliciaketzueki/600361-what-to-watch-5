import React from "react";
import renderer from "react-test-renderer";
import {VideoBtn} from "./video-btn";
import {FILM, NOOP} from "../../mocks";

describe(`Render VideoBtn`, () => {
  it(`Should VideoBtn render correctly`, () => {
    const tree = renderer
    .create(
        <VideoBtn
          film={FILM}
          moveToPage={NOOP}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
