import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs";
import {film, reviews, noop} from "./tabs.test";

configure({adapter: new Adapter()});

describe(`Click Tabs`, () => {
  // Наведение на карточку фильма
  test.each([
    [`with 1th tab`, 0],
    [`without 2d tab`, 1],
    [`without 3th tab`, 2],
  ])(`%s tabindex`, (_expected, tabindex) => {
    const handleTabsClick = jest.fn();

    const wrapper = shallow(
        <Tabs
          reviews={reviews}
          tabIndex={tabindex}
          onClick={handleTabsClick}
          film={film}
        />
    );

    wrapper.find(`.movie-nav__link`).at(tabindex).simulate(`click`, {
      preventDefault: noop,
      stopPropagation: noop
    });
    expect(handleTabsClick).toHaveBeenCalledTimes(1);
  });
});
