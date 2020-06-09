import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import BusinessSearch from './components/BusinessSearch';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Route exact path='/' component={LandingPage} />
        <div>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/all_companies' component={BusinessSearch} />
        </div>
      </div>
    </Router>
  );
}

export default App;
