import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./screen-main";
import {BrowserRouter} from "react-router-dom";

jest.mock(`../big-movie-card/big-movie-card`, () => `BigMovieCard`);
jest.mock(`../footer/footer`, () => `Footer`);
jest.mock(`../movies-by-genres/movies-by-genres`, () => `MoviesByGenres`);

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

describe(`Render Main`, () => {
  it(`Render Main`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Main
              promoFilm={film}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

