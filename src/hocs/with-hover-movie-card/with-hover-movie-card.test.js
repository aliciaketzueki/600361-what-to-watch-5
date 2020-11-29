import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import withHoverMovieCard from "./with-hover-movie-card";
import {MOCK_COMPONENT_WITH_CHILDREN} from "../../mocks";

const MockComponentWrapped = withHoverMovieCard(MOCK_COMPONENT_WITH_CHILDREN);

describe(`Render withHoverMovieCard`, () => {
  it(`Should withHoverMovieCard render correctly`, () => {
    const tree = renderer.create(
        <MockComponentWrapped>
          <Fragment />
        </MockComponentWrapped>, {
          createNodeMock() {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
