export function getEditingUserId(state) {
  return state.users.userSettings.editingUser
}

export function getUserInfo(state, userId) {
  return state.users.usersById[userId];
}
