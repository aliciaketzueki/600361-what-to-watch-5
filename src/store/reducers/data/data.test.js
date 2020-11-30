import MockAdapter from "axios-mock-adapter";
import {data} from "./data";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../actions/action";
import {fetchFilms, fetchPromoFilm, fetchFilm, fetchReviews, addReview, fetchFavourites, checkAuth, login} from "../../actions/api-actions";
import {FILMS, FILM, REVIEWS, RATING, COMMENT, AUTH_INFO, MOCK_PASSWORD, ERROR_STATUS} from "../../../mocks";
import {APIRoute, AuthorizationStatus} from "../../../utils/const";
import {convertUserProps, convertFilmProps} from "../../../utils/utils";

const api = createAPI(() => {});

describe(`Data reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(data(void 0, {})).toEqual({
      promoFilm: {},
      films: [],
      film: null,
      reviews: [],
      favourites: [],
      reviewStatus: null
    });
  });

  it(`Reducer should load films`, () => {
    expect(data({
      films: [],
    }, {
      type: ActionType.LOAD_FILMS,
      payload: FILMS,
    })).toEqual({
      films: FILMS,
    });
  });

  it(`Reducer should load promofilm`, () => {
    expect(data({
      promoFilm: {},
    }, {
      type: ActionType.LOAD_PROMO_FILM,
      payload: FILM,
    })).toEqual({
      promoFilm: FILM,
    });
  });

  it(`Reducer should load film`, () => {
    expect(data({
      film: null,
    }, {
      type: ActionType.LOAD_FILM,
      payload: FILM,
    })).toEqual({
      film: FILM,
    });
  });

  it(`Reducer should load reviews`, () => {
    expect(data({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: REVIEWS,
    })).toEqual({
      reviews: REVIEWS,
    });
  });

  it(`Reducer should load favourites`, () => {
    expect(data({
      favourites: [],
    }, {
      type: ActionType.LOAD_FAVOURITES,
      payload: FILMS,
    })).toEqual({
      favourites: FILMS,
    });
  });

  it(`Reducer should get review status`, () => {
    expect(data({
      reviewStatus: null
    }, {
      type: ActionType.GET_REVIEW_STATUS,
      payload: ERROR_STATUS
    })).toEqual({
      reviewStatus: ERROR_STATUS
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const covertedFilms = FILMS.map((item) => convertFilmProps(item));

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, FILMS);

    return fetchFilms()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: covertedFilms
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CREATE_GENRES_LIST,
          payload: FILMS
        });
      });
  });

  it(`Should make a correct API call to promofilm`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.PROMO)
      .reply(200, FILM);

    return fetchPromoFilm()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: convertFilmProps(FILM)
        });
      });
  });

  it(`Should make a correct API call to film`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onGet(`${APIRoute.FILMS}/${0}`)
      .reply(200, FILM);

    return fetchFilm(0)(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM,
          payload: convertFilmProps(FILM)
        });
      });
  });

  it(`Should make a correct API call to reviews`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${0}`)
      .reply(200, REVIEWS);

    return fetchReviews(0)(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: REVIEWS
        });
      });
  });

  it(`Should make a correct API call to addReviews`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${0}`)
      .reply(200, {RATING, COMMENT});

    return addReview(0, RATING, COMMENT)(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a correct API call to favourites`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const covertedFilms = FILMS.map((item) => convertFilmProps(item));

    apiMock
      .onGet(APIRoute.FAVOURITES)
      .reply(200, FILMS);

    return fetchFavourites()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVOURITES,
          payload: covertedFilms
        });
      });
  });

  it(`Should make a correct API call to checkAuth`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, AUTH_INFO);

    return checkAuth()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER,
          payload: convertUserProps(AUTH_INFO)
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
      });
  });

  it(`Should make a correct API call to login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onPost(APIRoute.LOGIN, {email: AUTH_INFO.email, password: MOCK_PASSWORD})
      .reply(200, AUTH_INFO);

    return login({email: AUTH_INFO.email, password: MOCK_PASSWORD})(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_USER,
          payload: convertUserProps(AUTH_INFO)
        });
      });
  });
});
