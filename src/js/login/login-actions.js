import { LoginActions } from "./constants";
import { apiCall } from "../utils/api.js";

function loginRequest() {
  return {
    type: LoginActions.LOGIN.REQUEST,
  }

}
function loginSuccess() {
  return {
    type: LoginActions.LOGIN.SUCCESS,
  }
}
function loginFailure() {
  return {
    type: LoginActions.LOGIN.FAILURE,
  }
}

export function login() {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      await apiCall();
      dispatch(loginSuccess());
      return Promise.resolve();
    }
    catch (e) {
      dispatch(loginFailure());
      return Promise.reject();
    }
  }
}
