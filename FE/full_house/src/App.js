import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/register.css";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import BusinessSearch from "./components/BusinessSearch";
import BusinessProfile from "./components/BusinessProfile";
import SendFrame from "./components/SendFrame";
import BusinessDashboard from "./components/BusinessDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <div>
          {/* <Route exact path='/login' component={Login} /> */}
          <Route exact path="/register" component={Signup} />
          <Route exact path="/all_companies" component={BusinessSearch} />
          <Route exact path="/business_profile" component={BusinessProfile} />
          <Route exact path="/send-frame" component={SendFrame} />
          <Switch>
            <Route
              path="/business-dashboard/:id"
              children={<BusinessDashboard />}
            />
          </Switch>
          <Switch>
            <Route
              exact
              path="/companyprofile/:id"
              children={<BusinessProfile />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
