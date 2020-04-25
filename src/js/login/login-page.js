import React from "react";
import LoginFormContainer from "./views/login-form-container.js"

const LoginPage = () => (
  <div className="login-page">
    <div className="container">
      {
        <LoginFormContainer />
      }
    </div>
  </div>
)

export default LoginPage;
