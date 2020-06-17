import React from 'react';
import "./Footer.css";
import logo from "../../assets/images/github-logo.svg"


const Footer = () => (
    
    <div
        className="footer">
        <a
        className="footer-image"
        href="https://github.com/ashleyallphin/react-clicky-game"
        target="_blank"
        rel="noopener noreferrer"
        cursor="pointer"
        >
        <img
        alt="Github Logo"
        src={logo}
        />
        </a>

    </div>
);

export default Footer;