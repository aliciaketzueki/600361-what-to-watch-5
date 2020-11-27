import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";
import {film, noop} from "./small-movie-card.test";

configure({adapter: new Adapter()});

describe(`Hover SmallMovieCard`, () => {
  // Наведение на карточку фильма
  it(`Should SmallMovieCard be mouseentered`, () => {
    const handleMouseEnter = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard
          film={film}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={noop}
        />
    );

    wrapper.find(`.small-movie-card`).simulate(`mouseenter`);
    expect(handleMouseEnter).toHaveBeenCalledTimes(1);
  });

  // Уведение мыши с карточки фильма
  it(`Should SmallMovieCard be mouseleave`, () => {
    const handleMouseLeave = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard
          film={film}
          onMouseEnter={noop}
          onMouseLeave={handleMouseLeave}
        />
    );

    wrapper.find(`.small-movie-card`).simulate(`mouseleave`);
    expect(handleMouseLeave).toHaveBeenCalledTimes(1);
  });
});
