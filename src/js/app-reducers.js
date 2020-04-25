import { combineReducers } from "redux";
import users from "./users/users-reducers";
import login from "./login/login-reducers.js";

const reducers = combineReducers({
  login: login,
  users: users
})
export default reducers;
