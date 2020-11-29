import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Header} from "./header";
import {AuthorizationStatus} from "../../utils/const";
import {HEADER, USER_DATA, FILM} from "../../mocks";

configure({adapter: new Adapter()});

describe(`Press User Avatar`, () => {
  it(`Should User Avatar be pressed`, () => {
    const handleMoveToPage = jest.fn();

    const wrapper = shallow(
        <Header
          header={HEADER}
          login={AuthorizationStatus.AUTH}
          userData={USER_DATA}
          film={FILM}
          moveToPage={handleMoveToPage}
        />
    );

    wrapper.find(`.user-block__avatar`).simulate(`click`);
    expect(handleMoveToPage).toHaveBeenCalledTimes(1);
  });
});

