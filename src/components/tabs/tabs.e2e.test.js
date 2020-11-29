import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs";
import {REVIEWS, FILM, NOOP} from "../../mocks";
import {SHORT_TIMEOUT} from "../../utils/const";

configure({adapter: new Adapter()});

describe(`Press Tabs`, () => {
  it(`Should Tab activeClass be changed`, () => {
    const wrapper = shallow(
        <Tabs
          reviews={REVIEWS}
          film={FILM}
        />
    );

    const activeClass = `movie-nav__item--active`;
    const item = wrapper.find(`.movie-nav__item`);
    const defaultItem = 0;
    const clickedItem = 1;

    expect(item.at(defaultItem).hasClass(activeClass)).toEqual(true);

    wrapper.find(`.movie-nav__link`).at(clickedItem).simulate(`click`, {
      preventDefault: NOOP,
      stopPropagation: NOOP
    });

    setTimeout(() => {
      expect(item.at(defaultItem).hasClass(activeClass)).toEqual(false);
      expect(item.at(clickedItem).hasClass(activeClass)).toEqual(true);

      wrapper.unmount();
    }, SHORT_TIMEOUT);
  });
});
