import React from "react";
import renderer from "react-test-renderer";
import VideoPreview from "./video-preview";
import {FILM} from "../../mocks";

describe(`Render VideoPreview`, () => {
  it(`Should VideoPreview render correctly`, () => {
    const tree = renderer
    .create(
        <VideoPreview
          film={FILM}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
