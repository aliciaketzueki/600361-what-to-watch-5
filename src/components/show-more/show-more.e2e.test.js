import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ShowMore} from "./show-more";
import {films} from "./show-more.test";

configure({adapter: new Adapter()});

describe(`Press ShowMore`, () => {
  it(`Should ShowMore be pressed`, () => {
    const handleShowMoreClick = jest.fn();

    const wrapper = shallow(
        <ShowMore
          filmsRendered={0}
          films={films}
          onShowMoreClick={handleShowMoreClick}
        />
    );

    wrapper.find(`.catalog__button`).simulate(`click`);
    expect(handleShowMoreClick).toHaveBeenCalledTimes(1);
  });
});
