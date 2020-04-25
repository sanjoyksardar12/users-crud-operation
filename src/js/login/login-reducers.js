import { LoginActions } from "./constants";

function login(state = { isAuthenticated: false, isAuthenticating: false }, action) {
  switch (action.type) {
    case LoginActions.LOGIN.REQUEST: {
      return { ...state, isAuthenticating: true }
    }
    case LoginActions.LOGIN.FAILURE: {
      return { ...state, isAuthenticating: false }
    }
    case LoginActions.LOGIN.SUCCESS: {
      return { ...state, isAuthenticating: false, isAuthenticated: true }
    }
  }
  return state;
}

export default login;
