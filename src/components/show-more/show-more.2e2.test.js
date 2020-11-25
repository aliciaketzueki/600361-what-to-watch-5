import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ShowMore} from "./show-more";

const film = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  previewImage: `img/the-grand-budapest-hotel.jpg`,
  backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
  backgroundColor: `#ffffff`,
  videoLink: `https://some-link`,
  previewVideoLink: `https://some-link`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
  isFavorite: false
};

const films = [film];

configure({adapter: new Adapter()});

describe(`Press ShowMore`, () => {
  it(`Should ShowMore be pressed`, () => {
    const handleShowMoreClick = jest.fn();

    const wrapper = shallow(
        <ShowMore
          filmsRendered={0}
          films={films}
          onShowMoreClick={handleShowMoreClick}
        />
    );

    wrapper.find(`.catalog__button`).simulate(`click`);
    expect(handleShowMoreClick).toHaveBeenCalledTimes(1);
  });
});
