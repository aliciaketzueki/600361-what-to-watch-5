import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AddReview} from "./screen-add-review";
import {FILM, FILM_ID} from "../../mocks";

configure({adapter: new Adapter()});

jest.mock(`react`, () => {
  return Object.assign({}, jest.requireActual(`react`), {useEffect: (f) => f()});
});

describe(`Load Film on ScreenAddReviewr`, () => {
  it(`Should Film be loaded`, () => {
    const handleLoadFilm = jest.fn().mockResolvedValue();

    shallow(
        <AddReview
          film={FILM}
          filmId={FILM_ID}
          loadCurrentFilm={handleLoadFilm}
        />
    );

    expect(handleLoadFilm).toHaveBeenCalledTimes(1);
  });
});
