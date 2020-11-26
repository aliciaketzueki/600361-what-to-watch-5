import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import withValidation from "./with-validation";
import PropTypes from "prop-types";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withValidation(MockComponent);

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
