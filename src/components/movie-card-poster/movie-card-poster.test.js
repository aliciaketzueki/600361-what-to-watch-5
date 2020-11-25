import React from "react";
import renderer from "react-test-renderer";
import MovieCardPoster from "./movie-card-poster";

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

describe(`Render MovieCardPoster`, () => {
  test.each([
    [`big`, `big`],
    [`small`, `small`],
    [`without classname`, ``],
  ])(`%s auth`, (_expected, classname) => {
    const tree = renderer
    .create(
        <MovieCardPoster
          film={film}
          classname={classname}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});