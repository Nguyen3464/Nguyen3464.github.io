import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import title from '../assets/shoeappname.png'

const NavigationBarShoeApp = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
  return (
    <div>
        <div id="navbar-shoe-app">
          <img src={title} alt='title' className='title'/>
        <Navbar color="faded" light expand="lg">
          <NavbarToggler onClick={toggleNavbar} className="toggle" />
          <Collapse isOpen={!collapsed} navbar className="toggle-open">
            <Nav navbar>
              <NavItem>
                <NavLink to="/" className="custom-nav-item-shoe-app">
                    About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/shoes" className="custom-nav-item-shoe-app">
                  Shoes
                </NavLink>
              </NavItem>
                <NavItem>
                  <a href="#icon" className="custom-nav-item-shoe-app">
                    Checkout
                  </a>
                </NavItem>
                <NavItem>
                  <a href='#carousel-container' className='custom-nav-item-shoe-app'>
                    Contact
                  </a>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default NavigationBarShoeApp
