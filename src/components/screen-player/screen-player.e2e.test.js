import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Player} from "./screen-player";
import browserHistory from "../../browser-history";
import {film} from "./screen-player.test";

configure({adapter: new Adapter()});

jest.mock(`react`, () => {
  return Object.assign({}, jest.requireActual(`react`), {useEffect: (f) => f()});
});

// console.log(sum(...numbers));
// console.log(sum.apply(null, numbers));

describe(`Load Film on ScreenPlayer`, () => {
  it(`Should Film be loaded`, () => {
    const handleLoadFilm = jest.fn().mockResolvedValue();

    shallow(
        <Player
          history={browserHistory}
          filmId={0}
          film={film}
          loadCurrentFilm={handleLoadFilm}
        />
    );

    expect(handleLoadFilm).toHaveBeenCalledTimes(1);
  });
});
