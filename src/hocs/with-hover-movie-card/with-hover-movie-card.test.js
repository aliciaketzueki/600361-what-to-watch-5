import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import withHoverMovieCard from "./with-hover-movie-card";
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

const MockComponentWrapped = withHoverMovieCard(MockComponent);

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
