import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import withPlayingVideo from "./with-playing-video";
import {FILM, NOOP, MOCK_COMPONENT_WITH_CHILDREN} from "../../mocks";

const MockComponentWrapped = withPlayingVideo(MOCK_COMPONENT_WITH_CHILDREN);

describe(`Render withPlayingVideo`, () => {
  it(`Should withPlayingVideo render correctly`, () => {
    const tree = renderer.create(
        <MockComponentWrapped
          film={FILM}
          isPlaying={false}
          onPlay={NOOP}
          onPause={NOOP}
          onMouseDown={NOOP}
          onFullScreen={NOOP}
          onExitBtnClick={NOOP}
        >
          <Fragment />
        </MockComponentWrapped>, {
          createNodeMock() {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
