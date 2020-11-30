import {user} from "./user";
import {ActionType} from "../../actions/action";
import {AuthorizationStatus} from "../../../utils/const";
import {AUTH_INFO, ERROR_STATUS} from "../../../mocks";

describe(`User reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userData: {},
      userStatus: null
    });
  });

  it(`Reducer should change authorization status`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });

  it(`Reducer should load user data`, () => {
    expect(user({
      userData: {}
    }, {
      type: ActionType.LOAD_USER,
      payload: AUTH_INFO
    })).toEqual({
      userData: AUTH_INFO,
    });
  });

  it(`Reducer should get user status`, () => {
    expect(user({
      userStatus: null
    }, {
      type: ActionType.GET_USER_STATUS,
      payload: ERROR_STATUS
    })).toEqual({
      userStatus: ERROR_STATUS
    });
  });
});
