import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ModalContainer } from "react-router-modal";
import "react-router-modal/css/react-router-modal.css";

import { isAuthenticated } from "../services/auth";

// import SignUp from "./pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route path="/signup" component={SignUp} /> */}
        <PrivateRoute path="/Dashboard" component={Dashboard} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
      <ModalContainer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;