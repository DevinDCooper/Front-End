import React from 'react';
<<<<<<< HEAD
import './App.css';
import NavLinks from './NavLinks';
=======
import { Route, Link } from "react-router-dom";
import Login from './Login'
import SignUp from './SignUp'
>>>>>>> db1e5c20ab64fafced66bf76d09ae3739f639d9d


function App() {
  return (
    <div className="App">
      <NavLinks/>
    </div>
<<<<<<< HEAD
   
=======

     
     
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

>>>>>>> db1e5c20ab64fafced66bf76d09ae3739f639d9d
  );
}

export default App;
