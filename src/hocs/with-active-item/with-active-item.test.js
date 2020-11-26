import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import withActiveItem from "./with-active-item";
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

const MockComponentWrapped = withActiveItem(MockComponent);

describe(`Render withActiveItem`, () => {
  it(`Should withActivePlayer render correctly`, () => {
    const tree = renderer.create(
        <MockComponentWrapped>
          <Fragment />
        </MockComponentWrapped>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
