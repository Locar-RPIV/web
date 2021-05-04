import { Container } from "./styles";

import NavBar from "../../components/NavBar";

import VehicleList from "./Vehicles/VehiclesList";
import UsersList from "./Users/UsersList";
import ReservationList from "./Reservations/ReservationList";
import LocationList from "./Locations/LocationList";

const Dashboard = () => {
  return (
    <Container>
      <NavBar />
      <div className="container">
        <section id="first">
          <VehicleList />
        </section>

        <section id="second">
          <UsersList />
        </section>

        <section id="third">
          <ReservationList />
        </section>

        <section id="fourth">
          <LocationList />
        </section>
      </div>
    </Container>
  );
};

export default Dashboard;
