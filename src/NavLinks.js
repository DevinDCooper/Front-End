import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,} from 'reactstrap';
import Login from './Login';
import SignUp  from './SignUp';

const NavLink = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="gym">AnyWhereFitness</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="burger" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/Login">Login</Link>
            </NavItem>
            <NavItem>
              <Link to="/SignUp">SignUp</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
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

export default NavLink;