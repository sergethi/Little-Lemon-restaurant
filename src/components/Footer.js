import React from "react";
import "./Footer.css";
import logo from "../images/Logo-v1.png";
import {FaYoutube, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-menu">
        <div className="footer-image">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-naviagtion">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#menu">menu</Link>
            </li>
            <li>
              <a to="/booking">reservations</a>
            </li>
            <li>
              <Link to="/order-online">Order online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <ul>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#"> <span>Address</span>: 1247 Fake Street Chicago, IL</a>
            </li>
            <li>
              <a href="#"><span>Phone number</span>: 888-555-111</a>
            </li>
            <li>
              <a href="#"><span>email</span>: info@littlelemon.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <ul>
            <li>
              <a href="#">Socials Links</a>
            </li>
            <li>
              <a href="#"><FaFacebook /></a>
            </li>
            <li>
              <a href="#"><FaInstagram /></a>
            </li>
            <li>
              <a href="#"><FaTwitter /></a>
            </li>
            <li>
              <a href="#"><FaYoutube /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-legal">
        <p>© 2023 Little Lemon Restaurant. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
