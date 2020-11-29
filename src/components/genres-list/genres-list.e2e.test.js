import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {GenresList} from "./genres-list";
import {NOOP, GENRES_LIST} from "../../mocks";
import {ALL_GENRES, SHORT_TIMEOUT} from "../../utils/const";

configure({adapter: new Adapter()});

describe(`Press GenresList`, () => {
  it(`Should GenresList Link be pressed and activeClass be changed`, () => {
    const handleGenresClick = jest.fn();

    const wrapper = shallow(
        <GenresList
          genres={GENRES_LIST}
          onGenreClick={handleGenresClick}
          activeGenre={ALL_GENRES}
        />
    );

    const activeClass = `catalog__genres-item--active`;
    const item = wrapper.find(`.catalog__genres-item`);
    const defaultItem = 0;
    const clickedItem = 1;

    expect(item.at(defaultItem).hasClass(activeClass)).toEqual(true);

    wrapper.find(`.catalog__genres-link`).at(clickedItem).simulate(`click`, {
      preventDefault: NOOP,
      stopPropagation: NOOP
    });

    expect(handleGenresClick).toHaveBeenCalledTimes(1);

    setTimeout(() => {
      expect(item.at(defaultItem).hasClass(activeClass)).toEqual(false);
      expect(item.at(clickedItem).hasClass(activeClass)).toEqual(true);

      wrapper.unmount();
    }, SHORT_TIMEOUT);
  });
});
