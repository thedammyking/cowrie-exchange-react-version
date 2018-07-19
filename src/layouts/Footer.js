import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="row">
      <div className="footer__box">
        <p className="footer__text">
          &copy; 2018 Cowrie Integrated Systems. All rights reserved.
        </p>
        <ul className="footer__list">
          <li className="footer__item">
            <Link className="footer__link" to="#">
              About
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="#">
              FAQ
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="#">
              API
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="#">
              TOS
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="#">
              Privacy Policy
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" to="#">
              KYC/AML
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
