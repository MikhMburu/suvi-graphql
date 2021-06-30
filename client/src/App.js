// Import libraries
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
// Import files
import client from "./GraphQL/client";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
// Import components/pages
import Header from "./components/layout/Header";
import Dashboard from "./components/pages/Dashboard";
import Tenants from "./components//pages/Tenants";
import Users from "./components/pages/Users";
import AddUsers from "./components/pages/AddUser";
import AddTenant from "./components/pages/AddTenant";
import MeterReading from "./components/pages/MeterReading";
import UserProfile from "./components/pages/UserProfile";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/tenants">
            <Tenants />
          </Route>
          <Route path="/users/:user" exact>
            <UserProfile />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/add-user">
            <AddUsers />
          </Route>
          <Route path="/add-tenant">
            <AddTenant />
          </Route>
          <Route path="/houses">
            <h1>Houses</h1>
          </Route>
          <Route path="/meter-reading">
            <MeterReading />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
