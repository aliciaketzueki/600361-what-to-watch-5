import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withPlayingVideo from "./with-playing-video";
import {FILM, NOOP, MOCK_COMPONENT_WITH_CHILDREN} from "../../mocks";

configure({adapter: new Adapter()});

const MockComponentWrapped = withPlayingVideo(MOCK_COMPONENT_WITH_CHILDREN);

describe(`Change state with video playing`, () => {
  it(`Should state changing depending on video playing`, () => {
    const wrapper = mount(
        <MockComponentWrapped
          film={FILM}
          isPlaying={false}
          onPlay={NOOP}
          onPause={NOOP}
          onMouseDown={NOOP}
          onFullScreen={NOOP}
          onExitBtnClick={NOOP}
        />, {
          createNodeMock() {
            return {};
          }
        }
    );

    expect(wrapper.state().isPlaying).toEqual(false);

    const e = {preventDefault: jest.fn()};
    window.HTMLMediaElement.prototype.play = NOOP;
    window.HTMLMediaElement.prototype.pause = NOOP;

    wrapper.instance().onPlay(e);
    expect(wrapper.state().isPlaying).toEqual(true);

    wrapper.instance().onPause(e);
    expect(wrapper.state().isPlaying).toEqual(false);
  });
});
