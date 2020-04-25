import React from 'react';
import { connect } from "react-redux";
import AddUserForm from "../components/add-user-form.js";
import { addUser, updateUser } from "../users-actions.js";
import { getEditingUserId, getUserInfo } from "../../app-selector.js";

function AddUserFormContiner({ addUser, userInfo, editingUserId, updateUser }) {
  debugger
  return (
    <div className="form-container">
      <AddUserForm
        addUser={addUser}
        userInfo={userInfo}
        updateUser={updateUser}
        editingUserId={editingUserId} />
    </div>
  )
}

const mapStateToProps = (state) => {
  const editingUserId = getEditingUserId(state);
  let userInfo = !!editingUserId ? getUserInfo(state, editingUserId) : undefined;
  return {
    editingUserId: editingUserId,
    userInfo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
    updateUser: (user) => dispatch(updateUser(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddUserFormContiner);
