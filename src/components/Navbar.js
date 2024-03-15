// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import your CSS file for styling
import { ConnectButton } from "web3uikit";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          CropChain
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/kvkmanager" className="navbar-link">
              Admin
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/farmer" className="navbar-link">
              Farmer
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/scientist" className="navbar-link">
              Scientist
            </Link>
          </li>
          <li>
            {" "}
            <ConnectButton />{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
