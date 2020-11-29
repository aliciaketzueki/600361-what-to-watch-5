import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MyListBtn} from "./my-list-btn";
import {FILM} from "../../mocks";
import {AuthorizationStatus} from "../../utils/const";

configure({adapter: new Adapter()});

describe(`Press MyListBtn`, () => {
  test.each([
    [`with`, AuthorizationStatus.AUTH],
    [`without`, AuthorizationStatus.NO_AUTH],
  ])(`%s auth`, (_expected, login) => {
    const handleMyListBtnClick = jest.fn();

    const wrapper = shallow(
        <MyListBtn
          film={FILM}
          authStatus={login}
          addFilm={handleMyListBtnClick}
          moveToPage={handleMyListBtnClick}
        />
    );

    wrapper.find(`.btn--list`).simulate(`click`);
    expect(handleMyListBtnClick).toHaveBeenCalledTimes(1);
  });
});
