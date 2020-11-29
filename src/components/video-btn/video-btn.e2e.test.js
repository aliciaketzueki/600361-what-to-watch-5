import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {VideoBtn} from "./video-btn";
import {FILM} from "../../mocks";

configure({adapter: new Adapter()});

describe(`Press VideoBtn`, () => {
  it(`Should VideoBtn be pressed`, () => {
    const handleMoveToPage = jest.fn();

    const wrapper = shallow(
        <VideoBtn
          film={FILM}
          moveToPage={handleMoveToPage}
        />
    );

    wrapper.find(`.movie-card__button`).simulate(`click`);
    expect(handleMoveToPage).toHaveBeenCalledTimes(1);
  });
});
