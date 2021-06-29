import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

// import SignUp from "./pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import BusRegistration from "../pages//Dashboard/BusRegistration";
import MotorcycleRegistration from "../pages/Dashboard/MotorcycleRegistration";
import BicicletaRegistration from "../pages/Dashboard/BicicletaRegistration";
import FeedbackVehicle from "../pages/Dashboard/Vehicles/FeedbackVehicle/index";
import FeedbackClient from "../pages/Dashboard/Users/FeedbackClient";
import ClientsRegistration from "../pages/Dashboard/Users/ClientsRegistration";
import VehicleRegistration from "../pages/Dashboard/Vehicles/VehicleRegistration";
import Users from "../pages/Dashboard/Users";
import VehicleOptions from "../pages/Dashboard/Vehicles/VehiclesOptions";
import UsersEdit from "../pages/Dashboard/Users/UsersEdit";
import AddLocation from "../pages/Dashboard/Locations/AddLocation"

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
        <PrivateRoute path="/Dashboard" component={Dashboard} />
        <Route path="/Users" component={Users} />
        <Route path="/VehicleRegistration" component={VehicleRegistration} />
        <Route path="/VehicleOptions" component={VehicleOptions} />
        <Route path="/BusRegistration" component={BusRegistration} />
        <Route path="/MotoRegistration" component={MotorcycleRegistration} />
        <Route path="/BicicletaRegistration" component={BicicletaRegistration} />
        <Route path="/ClientsRegistration" component={ClientsRegistration} />
        <Route path="/FeedbackVehicle" component={FeedbackVehicle} />
        <Route path="/FeedbackClient" component={FeedbackClient} />
        <Route path="/EditUser" component={UsersEdit} />
        <Route path="/AddLocation" component={AddLocation} />



        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;