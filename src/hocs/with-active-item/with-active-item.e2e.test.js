import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`Change state after tabs clicking`, () => {
  it(`Should state changing depending on tabs click`, () => {
    const wrapper = shallow(
        <MockComponentWrapped/>
    );

    expect(wrapper.state().tabIndex).toEqual(0);

    wrapper.instance().onClick(1);
    expect(wrapper.state().tabIndex).toEqual(1);

    wrapper.instance().onClick(2);
    expect(wrapper.state().tabIndex).toEqual(2);
  });
});
