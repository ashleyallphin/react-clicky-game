import React from 'react';
import "./Navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import logo from '../../assets/images/boosh-monkey-head.png'

const Nav = () => (
<Navbar
        className="Navbar"
        bg="dark"
        variant="dark">
        <NavbarBrand href="#home">
            <img
                alt="Boosh Monkey Head"
                src={logo}
            />{' '}
            Mighty Boosh Clicky Game
        </NavbarBrand>
    </Navbar>
);

export default Nav;