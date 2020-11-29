import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MyList} from "./screen-my-list";
import {FILMS} from "../../mocks";

configure({adapter: new Adapter()});

jest.mock(`react`, () => {
  return Object.assign({}, jest.requireActual(`react`), {useEffect: (f) => f()});
});

describe(`Load Film on ScreenMyList`, () => {
  it(`Should Film be loaded`, () => {
    const handleLoadFilm = jest.fn().mockResolvedValue();

    shallow(
        <MyList
          films={FILMS}
          loadFavourites={handleLoadFilm}
        />
    );

    expect(handleLoadFilm).toHaveBeenCalledTimes(1);
  });
});
