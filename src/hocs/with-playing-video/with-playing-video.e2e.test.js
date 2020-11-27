import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withPlayingVideo from "./with-playing-video";
import {film, noop, MockComponent} from "./with-playing-video.test";

configure({adapter: new Adapter()});

const MockComponentWrapped = withPlayingVideo(MockComponent);

describe(`Change state with video playing`, () => {
  it(`Should state changing depending on video playing`, () => {
    const wrapper = mount(
        <MockComponentWrapped
          film={film}
          isPlaying={false}
          onPlay={noop}
          onPause={noop}
          onMouseDown={noop}
          onFullScreen={noop}
          onExitBtnClick={noop}
        />, {
          createNodeMock() {
            return {};
          }
        }
    );

    expect(wrapper.state().isPlaying).toEqual(false);

    const e = {preventDefault: jest.fn()};
    window.HTMLMediaElement.prototype.play = noop;
    window.HTMLMediaElement.prototype.pause = noop;

    wrapper.instance().onPlay(e);
    expect(wrapper.state().isPlaying).toEqual(true);

    wrapper.instance().onPause(e);
    expect(wrapper.state().isPlaying).toEqual(false);
  });
});
