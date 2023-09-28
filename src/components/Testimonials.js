import React from "react";
import "./Testimonials.css";
import db from "../db.json";

function Testimonials() {
  return (
    <div className="testimonials-main-container">
      <p>Testimonials</p>
      <div className="review-container">
        {db.testimonials.map((item) => {
          // Dynamically require the image from the images folder
          const imageSrc = require(`../images/${item.image}`);
          return (
            <div className="review-card" key={item.id}>
              <p className="card-name">{item.name}</p>
              <img src={imageSrc} alt={item.name} />
              <div>
                {[...Array(item.stars)].map((_, i) => (
                  <span key={i} id="stars">★</span>
                ))}
              </div>
              <p>{item.review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
