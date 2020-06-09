import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import NavBar from './components/NavBar';

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
      <Route path='/register'></Route>
    </Router>
  );
}

export default App;
