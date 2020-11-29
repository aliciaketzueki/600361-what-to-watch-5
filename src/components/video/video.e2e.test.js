import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video";
import {FILM, NOOP, MOVIE} from "../../mocks";
const {duration, progress} = MOVIE;

configure({adapter: new Adapter()});

describe(`Playing Video`, () => {
  // Клик по кнопке Проигрывания видео
  it(`Should PlayBtn be clicked`, () => {
    const handleVideoPlayBtnClick = jest.fn();

    const wrapper = shallow(
        <VideoPlayer
          onExitBtnClick={NOOP}
          isPlaying={false}
          duration={duration}
          progress={progress}
          onPlay={handleVideoPlayBtnClick}
          onPause={NOOP}
          onMouseDown={NOOP}
          onFullScreen={NOOP}
          film={FILM}
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
          onExitBtnClick={NOOP}
          isPlaying={true}
          duration={duration}
          progress={progress}
          onPlay={NOOP}
          onPause={handleVideoPauseBtnClick}
          onMouseDown={NOOP}
          onFullScreen={NOOP}
          film={FILM}
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
          onExitBtnClick={NOOP}
          isPlaying={true}
          duration={duration}
          progress={progress}
          onPlay={NOOP}
          onPause={NOOP}
          onMouseDown={handleVideoTogglerMouseDown}
          onFullScreen={NOOP}
          film={FILM}
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
          onExitBtnClick={NOOP}
          isPlaying={true}
          duration={duration}
          progress={progress}
          onPlay={NOOP}
          onPause={NOOP}
          onMouseDown={NOOP}
          onFullScreen={handleFullScreenBtnClick}
          film={FILM}
        />
    );

    wrapper.find(`.player__full-screen`).simulate(`click`);
    expect(handleFullScreenBtnClick).toHaveBeenCalledTimes(1);
  });

  // Клик по кнопке ExitBtn
  it(`Should ExitBtn be clicked`, () => {
    const handleExitBtnClick = jest.fn();

    const wrapper = shallow(
        <VideoPlayer
          onExitBtnClick={handleExitBtnClick}
          isPlaying={true}
          duration={duration}
          progress={progress}
          onPlay={NOOP}
          onPause={NOOP}
          onMouseDown={NOOP}
          onFullScreen={NOOP}
          film={FILM}
        />
    );

    wrapper.find(`.player__exit`).simulate(`click`);
    expect(handleExitBtnClick).toHaveBeenCalledTimes(1);
  });
});
