import { combineReducers } from "redux";
import { UsersActions } from "./constants";

function usersById(state = {}, action) {
  switch (action.type) {
    case UsersActions.ADD.USER: {
      return {
        ...state,
        [action.user.id]: action.user
      }
    }
    case UsersActions.DELETE.USER: {
      return Object.fromEntries(
        Object.entries(state)
          .filter(([key]) => key !== action.userId))

    }
    case UsersActions.UPDATE.USER: {
      return {
        ...state,
        [action.user.id]: action.user
      }
    }
    default: return state;
  }
}

function userSettings(state = { editingUser: undefined }, action) {
  switch (action.type) {
    case UsersActions.SET.EDIT.USER_ID: {
      return {
        ...state, editingUser: action.userId
      }
    }
    case UsersActions.UPDATE.USER: {
      return {
        ...state, editingUser: undefined
      }
    }
    default: return state;
  }
}

const users = combineReducers({
  userSettings,
  usersById
});

export default users;
