import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-image">
        <image />
      </div>
      <div className="footer-naviagtion">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">menu</a>
          </li>
          <li>
            <a href="#">reservations</a>
          </li>
          <li>
            <a href="#">Order online</a>
          </li>
          <li>
            <a href="#">Login</a>
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
            <a href="#">Meta</a>
          </li>
          <li>
            <a href="#">Instagran</a>
          </li>
          <li>
            <a href="#">Twiter</a>
          </li>
          <li>
            <a href="#">Youtube</a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
