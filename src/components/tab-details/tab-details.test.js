import React from "react";
import renderer from "react-test-renderer";
import TabDetails from "./tab-details";
import {FILM} from "../../mocks";

describe(`Render TabDetails`, () => {
  it(`Should TabDetails render correctly`, () => {
    const tree = renderer
    .create(
        <TabDetails
          film={FILM}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
