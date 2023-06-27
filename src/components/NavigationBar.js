import React, { useState } from 'react';
import logo1 from '../assets/logo.jpeg';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

const NavigationBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <div id="navbar" className='sticky-top'>
        <NavLink to="/">
          <img src={logo1} alt="logo" className="logo-portfolio" />
        </NavLink>
        <Navbar color="faded" light expand="lg">
          <NavbarToggler onClick={toggleNavbar} className="toggle" />
          <Collapse isOpen={!collapsed} navbar className="toggle-open">
            <Nav navbar>
              <NavItem>
                <NavLink to="/" className="custom-nav-item">
                    About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/section1" className="custom-nav-item">
                  Projects
                </NavLink>
              </NavItem>
                <NavItem>
                  <NavLink to="/contact" className="custom-nav-item">
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/skills" className="custom-nav-item">
                    Skills
                  </NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavigationBar;