import {ActionType} from "../../actions/action";
import {AuthorizationStatus} from "../../../utils/const";
import {extend} from "../../../utils/utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {authorizationStatus: action.payload});
    case ActionType.LOAD_USER:
      return extend(state, {userData: action.payload});
  }

  return state;
};

export {user};
