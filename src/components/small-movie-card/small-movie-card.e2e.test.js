import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";
import {FILM, NOOP} from "../../mocks";

configure({adapter: new Adapter()});

describe(`Hover SmallMovieCard`, () => {
  // Наведение на карточку фильма
  it(`Should SmallMovieCard be mouseentered`, () => {
    const handleMouseEnter = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard
          film={FILM}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={NOOP}
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
          film={FILM}
          onMouseEnter={NOOP}
          onMouseLeave={handleMouseLeave}
        />
    );

    wrapper.find(`.small-movie-card`).simulate(`mouseleave`);
    expect(handleMouseLeave).toHaveBeenCalledTimes(1);
  });
});
