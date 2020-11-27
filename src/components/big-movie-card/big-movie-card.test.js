import React from "react";
import renderer from "react-test-renderer";
import BigMovieCard from "./big-movie-card";
import {BrowserRouter} from "react-router-dom";

jest.mock(`../movie-card-head/movie-card-head`, () => `MovieCardHead`);
jest.mock(`../movie-card-descr/movie-card-descr`, () => `MovieCardDescr`);
jest.mock(`../movie-card-poster/movie-card-poster`, () => `MovieCardPoster`);
jest.mock(`../form-add-review/form-add-review`, () => `FormAddReview`);

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

const reviews = [review];

describe(`Render BigMovieCard`, () => {
  // with full content
  test.each([
    [`with`, true],
    [`without`, false],
  ])(`%s full content`, (_expected, isFull) => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <BigMovieCard
              isFull={isFull}
              isReview={true}
              film={film}
              reviews={reviews}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  // with review
  test.each([
    [`with`, true],
    [`without`, false],
  ])(`%s form review`, (_expected, isReview) => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <BigMovieCard
              isFull={true}
              isReview={isReview}
              film={film}
              reviews={reviews}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
