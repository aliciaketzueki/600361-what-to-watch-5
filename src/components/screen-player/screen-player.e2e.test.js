import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Player} from "./screen-player";
import {FILM, NOOP, FILM_ID} from "../../mocks";

configure({adapter: new Adapter()});

jest.mock(`react`, () => {
  return Object.assign({}, jest.requireActual(`react`), {useEffect: (f) => f()});
});

describe(`Load Film on ScreenPlayer`, () => {
  it(`Should Film be loaded`, () => {
    const handleLoadFilm = jest.fn().mockResolvedValue();

    shallow(
        <Player
          onExitBtnClick={NOOP}
          filmId={FILM_ID}
          film={FILM}
          loadCurrentFilm={handleLoadFilm}
        />
    );

    expect(handleLoadFilm).toHaveBeenCalledTimes(1);
  });
});
