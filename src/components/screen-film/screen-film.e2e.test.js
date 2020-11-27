import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Film} from "./screen-film";
import {films, film, reviews} from "./screen-film.test";

configure({adapter: new Adapter()});

jest.mock(`react`, () => {
  return Object.assign({}, jest.requireActual(`react`), {useEffect: (f) => f()});
});

describe(`Load Film on ScreenFilm`, () => {
  it(`Should Film be loaded`, () => {
    const handleLoadFilm = jest.fn().mockResolvedValue();

    shallow(
        <Film
          films={films}
          filmId={0}
          film={film}
          reviews={reviews}
          loadCurrentFilm={handleLoadFilm}
        />
    );

    expect(handleLoadFilm).toHaveBeenCalledTimes(1);
  });
});
