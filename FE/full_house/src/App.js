import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./css/register.css";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import BusinessSearch from "./components/BusinessSearch";
import BusinessProfile from "./components/BusinessProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/all_companies" component={BusinessSearch} />
          <Route exact path="/business_profile" component={BusinessProfile} />
        </div>
      </div>
    </Router>
  );
}

export default App;
