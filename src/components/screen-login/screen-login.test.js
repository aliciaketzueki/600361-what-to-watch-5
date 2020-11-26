import React from "react";
import renderer from "react-test-renderer";
import Login from "./screen-login";
import {BrowserRouter} from "react-router-dom";

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../footer/footer`, () => `Footer`);
jest.mock(`../form-login/form-login`, () => `FormLogin`);

describe(`Render Login`, () => {
  it(`Should Login render correctly`, () => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
