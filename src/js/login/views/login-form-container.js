import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "../components/login-form.js";
import { login } from "../login-actions.js";

function LoginFormContainer({ login, isAuthenticated, isAuthenticating }) {
  if (isAuthenticated) {
    return <Redirect to="/users"></Redirect>
  }
  return (
    <div className="form-details">
      <h3>Login </h3>
      <LoginForm login={login} isAuthenticating={isAuthenticating} />
    </div>
  )
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
  isAuthenticating: state.login.isAuthenticating
})
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
