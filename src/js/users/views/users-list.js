import React, { useCallback } from "react";
import { connect } from "react-redux";
import { deleteUser, editUser } from "../users-actions.js";


function UsersList({ usersById, deleteUser, editUser }) {
  const deleteUserHandler = useCallback((id) => {
    return (e) => {
      e.preventDefault();
      deleteUser(id)
    }
  })

  const editUserHandler = useCallback((id) => {
    return (e) => {
      e.preventDefault();
      editUser(id);
    }
  })
  return (
    <div className="users-list-container">
      {!!Object.values(usersById).length &&
        <div className="users-list">
          {
            Object.values(usersById)
              .map(({ name, id }) =>
                <p key={id} className="users-list-item">
                  <span className="name"> {name}</span>
                  <span className="actions">
                    <img src="/icons/edit.svg" alt="edit" onClick={editUserHandler(id)} />
                    <img src="/icons/delete.png" alt="delete" onClick={deleteUserHandler(id)} />
                  </span>
                </p>
              )
          }
        </div>}

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    usersById: state.users.usersById
  }
}
const mapDiapthToProps = (dispatch) => {
  return {
    deleteUser: (id) => dispatch(deleteUser(id)),
    editUser: (id) => dispatch(editUser(id))
  }
}
export default connect(mapStateToProps, mapDiapthToProps)(UsersList);
