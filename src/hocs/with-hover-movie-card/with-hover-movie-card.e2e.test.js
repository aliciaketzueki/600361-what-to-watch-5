import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withHoverMovieCard from "./with-hover-movie-card";
import {SECOND} from "../../utils/const";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;

const MockComponentWrapped = withHoverMovieCard(MockComponent);

describe(`Change state after hover`, () => {
  it(`Should state changing depending on hover`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />, {
          createNodeMock: () => {
            return {};
          }
        }
    );

    expect(wrapper.state().isActive).toEqual(false);

    wrapper.instance().handleMouseEnter();
    setTimeout(() => {
      expect(wrapper.state().isActive).toEqual(true);

      wrapper.instance().handleMouseLeave();
      expect(wrapper.state().isActive).toEqual(false);
    }, SECOND);
  });
});
