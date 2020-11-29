import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import withValidation from "./with-validation";
import {MOCK_COMPONENT_WITH_CHILDREN} from "../../mocks";

const MockComponentWrapped = withValidation(MOCK_COMPONENT_WITH_CHILDREN);

describe(`Render withValidation`, () => {
  it(`Should withValidation render correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped>
        <Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
