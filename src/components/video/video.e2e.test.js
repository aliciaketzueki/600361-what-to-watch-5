import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video";
import {film, noop} from "./video.test";

configure({adapter: new Adapter()});

describe(`Playing Video`, () => {
  // Клик по кнопке Проигрывания видео
  it(`Should PlayBtn be clicked`, () => {
    const handleVideoPlayBtnClick = jest.fn();

    const wrapper = shallow(
        <VideoPlayer
          onExitBtnClick={noop}
          isPlaying={false}
          duration={1000}
          progress={10}
          onPlay={handleVideoPlayBtnClick}
          onPause={noop}
          onMouseDown={noop}
          onFullScreen={noop}
          film={film}
        />
    );

    wrapper.find(`.player__play`).simulate(`click`);
    expect(handleVideoPlayBtnClick).toHaveBeenCalledTimes(1);
  });

  // Клик по кнопке Остановки видео
  it(`Should PausedBtn be clicked`, () => {
    const handleVideoPauseBtnClick = jest.fn();

    const wrapper = shallow(
        <VideoPlayer
          onExitBtnClick={noop}
          isPlaying={true}
          duration={1000}
          progress={10}
          onPlay={noop}
          onPause={handleVideoPauseBtnClick}
          onMouseDown={noop}
          onFullScreen={noop}
          film={film}
        />
    );

    wrapper.find(`.player__play`).simulate(`click`);
    expect(handleVideoPauseBtnClick).toHaveBeenCalledTimes(1);
  });

  // Перемещение ползунка
  it(`Should VideoToggler be moved`, () => {
    const handleVideoTogglerMouseDown = jest.fn();

    const wrapper = shallow(
        <VideoPlayer
          onExitBtnClick={noop}
          isPlaying={true}
          duration={1000}
          progress={10}
          onPlay={noop}
          onPause={noop}
          onMouseDown={handleVideoTogglerMouseDown}
          onFullScreen={noop}
          film={film}
        />
    );

    wrapper.find(`.player__toggler`).simulate(`mousedown`);
    expect(handleVideoTogglerMouseDown).toHaveBeenCalledTimes(1);
  });

  // Перемещение ползунка
  it(`Should FullScreenBtn be clicked`, () => {
    const handleFullScreenBtnClick = jest.fn();

    const wrapper = shallow(
        <VideoPlayer
          onExitBtnClick={noop}
          isPlaying={true}
          duration={1000}
          progress={10}
          onPlay={noop}
          onPause={noop}
          onMouseDown={noop}
          onFullScreen={handleFullScreenBtnClick}
          film={film}
        />
    );

    wrapper.find(`.player__full-screen`).simulate(`click`);
    expect(handleFullScreenBtnClick).toHaveBeenCalledTimes(1);
  });
});
