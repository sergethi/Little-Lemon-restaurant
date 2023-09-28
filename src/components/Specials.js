import React from "react";
import "./Specials.css";
import db from "../db.json";
import {FaBiking} from "react-icons/fa"

function Specials() {
  return (
    <div className="specials-container">
      <div className="specials-header">
        <p>This weeks specials !</p>
        <a href="/menu">Online menu</a>
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
                  <a href="#">Order a delivery </a> 
                  <FaBiking className='biking-icon'></FaBiking>
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
