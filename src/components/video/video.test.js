import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video";
import {FILM, NOOP, MOVIE} from "../../mocks";
const {duration, progress} = MOVIE;

describe(`Render VideoPlayer`, () => {
  test.each([
    [`with`, true],
    [`without`, false],
  ])(`%s playing`, (_expected, isPlaying) => {
    const tree = renderer
    .create(
        <VideoPlayer
          onExitBtnClick={NOOP}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          onPlay={NOOP}
          onPause={NOOP}
          onMouseDown={NOOP}
          onFullScreen={NOOP}
          film={FILM}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
