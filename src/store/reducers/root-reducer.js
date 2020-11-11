import {combineReducers} from "redux";
import {data} from "./data/data";
import {process} from "./process/process";
import {user} from "./user/user";

const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.PROCESS]: process,
  [NameSpace.USER]: user
});
