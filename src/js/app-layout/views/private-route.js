import React, { PureComponent } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import WaitingComponent from "../components/waiting-component.js";

class PrivateRoute extends PureComponent {
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...rest
    } = this.props;
    return (
      <Route
        exact
        {...rest}
        render={prop => {
          if (isAuthenticated) {
            return (WaitingComponent(Component)({ ...prop }));
          }
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: prop.location }
              }}
            />
          )
        }
        }
      />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.isAuthenticated
  }
}
export default connect(mapStateToProps, {})(PrivateRoute);
