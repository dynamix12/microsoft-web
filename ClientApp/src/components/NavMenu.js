import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const logout = () => {
    localStorage.removeItem('user');
    setUser(undefined);
  };

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <header>
      <Navbar
        className='navbar-expand-md navbar-toggleable-sm ng-white border-bottom box-shadow mb-3'
        container
        light
      >
        <NavbarBrand tag={Link} to='/'>
          Zoo Sofia
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse
          className='d-md-inline-flex flex-sm-row-reverse'
          isOpen={!collapsed}
          navbar
        >
          <ul className='navbar-nav flex-grow'>
            <NavItem>
              <NavLink tag={Link} className='text-dark' to='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className='text-dark' to='/gallery'>
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className='text-dark' to='/location'>
                Location
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className='text-dark' to='/FAQ'>
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className='text-dark' to='/workTime'>
                Working hours
              </NavLink>
            </NavItem>
            {user ? (
              <>
                <NavItem>
                  <NavLink tag={Link} className='text-dark user' to='/'>
                    {user.name}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={() => logout()}
                    tag={Link}
                    className='text-dark logout'
                    to='/'
                  >
                    Logout
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <NavItem>
                <NavLink tag={Link} className='text-dark' to='/login'>
                  Login
                </NavLink>
              </NavItem>
            )}
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default NavMenu;
