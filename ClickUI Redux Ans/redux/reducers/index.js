import { combineReducers} from "redux";

import userList from "./user-list";
import details from "./details"

export default combineReducers({
  userList,
  details,
});