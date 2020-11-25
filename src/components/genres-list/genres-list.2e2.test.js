import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {GenresList} from "./genres-list";
import {ALL_GENRES} from "../../utils/const";

configure({adapter: new Adapter()});

const genres = [`All genres`, `Crime`];

const noop = () => {};

describe(`Press GenresList`, () => {
  it(`Should GenresList be pressed`, () => {
    const handleGenresClick = jest.fn();

    const wrapper = shallow(
        <GenresList
          genres={genres}
          onGenreClick={handleGenresClick}
          onClick={noop}
          activeGenre={ALL_GENRES}
        />
    );

    wrapper.find(`.catalog__genres-link`).at(0).simulate(`click`, {
      preventDefault: noop,
      stopPropagation: noop
    });
    expect(handleGenresClick).toHaveBeenCalledTimes(1);
  });
});
