import React, { PureComponent } from "react";
import Loader from "../../app-components/loader.js";
function LoginForm({ login, history, isAuthenticating }) {
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login();
      history.push("/users");
    } catch (err) {

    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="userName" name="userName" />
      <input placeholder="password" name="password" />
      <button>Submit {isAuthenticating && <Loader />}</button>
    </form>
  )
}

export default LoginForm;
