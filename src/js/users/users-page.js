import React from "react";
import AddUserFormContiner from "./views/add-user-form-container.js";
import UsersList from "./views/users-list.js";

const UsersPage = () => {
  return (
    <div className="users-page-content">
      <AddUserFormContiner />
      <UsersList />
    </div>
  )
}
export default UsersPage;
