import React from "react";
import renderer from "react-test-renderer";
import TabReviews from "./tab-reviews";
import {REVIEWS} from "../../mocks";

describe(`Render TabReviews`, () => {
  it(`Should TabReviews render correctly`, () => {
    const tree = renderer
    .create(
        <TabReviews
          reviews={REVIEWS}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
