import React from "react";
import renderer from "react-test-renderer";
import TabOverview from "./tab-overview";
import {FILM} from "../../mocks";

describe(`Render TabOverview`, () => {
  it(`Should TabOverview render correctly`, () => {
    const tree = renderer
    .create(
        <TabOverview
          film={FILM}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
