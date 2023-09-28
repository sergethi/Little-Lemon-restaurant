import React from "react";
import "./Footer.css";
import logo from "../images/Logo-v1.png";
import {FaYoutube, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

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
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">menu</a>
            </li>
            <li>
              <a href="/reservations">reservations</a>
            </li>
            <li>
              <a href="/order-online">Order online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <ul>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#"> Address</a>
            </li>
            <li>
              <a href="#">Phone number</a>
            </li>
            <li>
              <a href="#">email</a>
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
