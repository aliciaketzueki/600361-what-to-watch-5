import {process} from "./process";
import {ActionType} from "../../actions/action";
import {getGenres} from "../../../utils/utils";
import {INITIAL_FILMS_NUM, ALL_GENRES} from "../../../utils/const";
import {FILMS, GENRE} from "../../../mocks";

describe(`Process reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(process(void 0, {})).toEqual({
      genres: [],
      activeGenre: ALL_GENRES,
      filmsRendered: INITIAL_FILMS_NUM,
    });
  });

  it(`Reducer should create Genres list`, () => {
    expect(process({
      genres: [],
    }, {
      type: ActionType.CREATE_GENRES_LIST,
      payload: FILMS,
    })).toEqual({
      genres: getGenres(FILMS),
    });
  });

  it(`Reducer should change active Genre`, () => {
    expect(process({
      activeGenre: ALL_GENRES,
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: GENRE,
    })).toEqual({
      activeGenre: GENRE,
    });
  });

  it(`Reducer should calc numbers of rendered film after show more clicking`, () => {
    expect(process({
      filmsRendered: INITIAL_FILMS_NUM,
    }, {
      type: ActionType.SHOW_MORE,
      payload: INITIAL_FILMS_NUM * 2
    })).toEqual({
      filmsRendered: INITIAL_FILMS_NUM * 2,
    });
  });
});
