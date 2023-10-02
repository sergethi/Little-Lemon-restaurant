import React from "react";
import "./Specials.css";
import db from "../db.json";
import { FaBiking } from "react-icons/fa";
import { Link } from "react-router-dom";

function Specials() {
  return (
    <div className="specials-container" id="menu-section">
      <div className="specials-header">
        <p>This week specials !</p>
        <Link to="/order-online">Online menu</Link>
      </div>
      <div className="specials-items">
        {db.specials.map((item) => {
          // Dynamically require the image from the images folder
          const imageSrc = require(`../images/${item.image}`);
          return (
            <div key={item.id} className="item-card">
              <img src={imageSrc} alt={item.name} />
              <div className="item-info">
                <div className="name-price">
                  <p id="name">{item.name}</p>
                  <p id="price">{item.price}</p>
                </div>

                <p>{item.description}</p>
                <div className="order-bikeIcon">
                  <Link to="/order-online">Order a delivery </Link>
                  <FaBiking className="biking-icon"></FaBiking>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Specials;
