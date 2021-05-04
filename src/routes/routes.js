import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import { isAuthenticated } from "../services/auth";

// import SignUp from "./pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import VehicleRegistration from "../pages/VehicleResgistration"
import BusRegistration from "../pages/BusResgistration"
import MotoRegistration from "../pages/MotoResgistration"
import BicicletaRegistration from "../pages/BicicletaRegistration"
import FeedbackVehicle from "../pages/FeedbackVehicle/index";
import FeedbackClient from "../pages/FeedbackClient/index";
import ClientsRegistration from "../pages/ClientsRegistration";

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
        <Route path="/VehicleRegistration" component={VehicleRegistration} />
        <Route path="/BusRegistration" component={BusRegistration} />
        <Route path="/MotoRegistration" component={MotoRegistration} />
        <Route path="/BicicletaRegistration" component={BicicletaRegistration} />
        <Route path="/ClientsRegistration" component={ClientsRegistration} />
        <Route path="/FeedbackVehicle" component={FeedbackVehicle} />
        <Route path="/FeedbackClient" component={FeedbackClient} />

        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;