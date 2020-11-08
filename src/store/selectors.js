import {createSelector} from "reselect";

export const getFilmsSelector = createSelector(
  state.DATA.films.entities,
  (films) => Object.values(films)
);
