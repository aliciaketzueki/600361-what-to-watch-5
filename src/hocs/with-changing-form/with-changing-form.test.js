import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import withChangingForm from "./with-changing-form";
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

const MockComponentWrapped = withChangingForm(MockComponent);

describe(`Render withChangingForm`, () => {
  it(`Should withChangingForm render correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped>
        <Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
