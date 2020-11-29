import React from "react";
import renderer from "react-test-renderer";
import BigMovieCard from "./big-movie-card";
import {BrowserRouter} from "react-router-dom";
import {FILM, REVIEWS} from "../../mocks";

jest.mock(`../movie-card-head/movie-card-head`, () => `MovieCardHead`);
jest.mock(`../movie-card-descr/movie-card-descr`, () => `MovieCardDescr`);
jest.mock(`../movie-card-poster/movie-card-poster`, () => `MovieCardPoster`);
jest.mock(`../form-add-review/form-add-review`, () => `FormAddReview`);

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
              film={FILM}
              reviews={REVIEWS}
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
              film={FILM}
              reviews={REVIEWS}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
