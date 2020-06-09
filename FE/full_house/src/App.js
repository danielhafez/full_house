import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <LandingPage />
      </div>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register></Register>
      </Route>
    </Router>
  );
}

export default App;
