// Import libraries
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import files
import "./App.css";
// Import components/pages
import Header from "./components/layout/Header";
import Dashboard from "./components/pages/Dashboard";
import Tenants from "./components//pages/Tenants";
import Users from "./components/pages/Users";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/tenants">
          <Tenants />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/houses">
          <h1>Houses</h1>
        </Route>
        <Route path="/meter-reading">
          <h1>Meter Readings</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
