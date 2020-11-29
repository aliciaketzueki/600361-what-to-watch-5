import React from "react";
import renderer from "react-test-renderer";
import {ShowMore} from "./show-more";
import {FILMS, FILMS_RENDERED, NOOP} from "../../mocks";

describe(`Render ShowMore`, () => {
  it(`Should ShowMore render correctly`, () => {
    const tree = renderer
      .create(
          <ShowMore
            filmsRendered={FILMS_RENDERED}
            films={FILMS}
            onShowMoreClick={NOOP}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
