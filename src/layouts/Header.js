import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="row">
      <div className="col-1-of-3">
        <div className="header__logo-box">
          <img
            src="./assets/img/cowrie-exchange-logo.png"
            alt="Cowrie Exchange NGNT Logo"
            className="header__logo"
          />
        </div>
      </div>

      <div className="col-2-of-3">
        <nav className="header__nav">
          <ul className="header__nav-list" role="navigation">
            <li className="header__nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="#">About</NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="https://medium.com/cowrie-exchange" target="_blank">
                Blog
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="#">FAQ</NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="#">Login</NavLink>
            </li>
            <li className="header__nav-item btn">
              <Link to="#">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
