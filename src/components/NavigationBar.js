import React, { useState } from 'react';
import logo1 from '../assets/logo.jpeg';
import { NavLink, useLocation } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

const NavigationBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <div id="navbar">
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
              {isHomePage && (
                <>
                <NavItem>
                  <a href="#gnome4" className="custom-nav-item">
                    Contact
                  </a>
                </NavItem>
                <NavItem>
                  <a href='#carousel-container' className='custom-nav-item'>
                    Skills
                  </a>
                </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavigationBar;