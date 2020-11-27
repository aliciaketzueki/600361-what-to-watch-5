import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {BrowserRouter} from "react-router-dom";

export const film = {
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

const review = {
  id: 1,
  user: {
    id: 4,
    name: `Kate Muir`
  },
  rating: 8.9,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`
};

export const reviews = [review];

export const noop = () => {};

describe(`Render Tabs`, () => {
  test.each([
    [`with 1th tab`, 0],
    [`without 2d tab`, 1],
    [`without 3th tab`, 2],
  ])(`%s tabindex`, (_expected, tabindex) => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <Tabs
            reviews={reviews}
            tabIndex={tabindex}
            onClick={noop}
            film={film}
          />
        </BrowserRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
