import { UsersActions } from "./constants";
import { v4 as uuidv4 } from "uuid";


function addUserAction(user) {
  return {
    type: UsersActions.ADD.USER,
    user: {
      ...user,
      id: uuidv4()
    }
  }
}

export function addUser(user) {
  return {
    type: UsersActions.ADD.USER,
    user: {
      ...user,
      id: uuidv4()
    }
  }
}
export function updateUser(user) {
  return {
    type: UsersActions.UPDATE.USER,
    user
  }
}

export function deleteUser(userId) {
  return {
    type: UsersActions.DELETE.USER,
    userId
  }
}

export function editUser(userId) {
  return {
    type: UsersActions.SET.EDIT.USER_ID,
    userId
  }
}
