import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Login from './Login'
import SignUp from './SignUp'


function App() {
  return (
    <div className="App">
    <div className="nav-links">
    <nav>
    <Link to="/Login">Login</Link>
    <Link to="/SignUp">SignUp</Link>
    </nav>

    </div>

     
     
    <Route path = "/Login"
    component={Login}
    render= {routeProps => {
      console.log('routeProps', routeProps);
    }}
    />
 <Route path = "/SignUp"
    component={SignUp}
    render= {routeProps => {
      console.log('routeProps', routeProps);
    }}
    />
    </div>

  );
}

export default App;
