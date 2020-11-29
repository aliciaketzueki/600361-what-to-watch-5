import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";
import {REVIEW} from "../../mocks";

describe(`Render Review`, () => {
  it(`Should Review render correctly`, () => {
    const tree = renderer
    .create(
        <Review
          review={REVIEW}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
