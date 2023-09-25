import React from 'react';
import "./CallToAction.css"
import restaurantFoodImg from "../images/restauranfood.jpg"

function CallToAction() {
  return (
    <div className="main-container">
      <div className="action-container">
        <div className="action-text">
          <p id='title'>Little Lemon</p>
          <p id='city'>Chicago</p>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a href="/booking">Reverse a table</a>
        </div>
        <div className="action-img">
          <img src={restaurantFoodImg} alt="food image" />
        </div>
      </div>
    </div>
  );
}

export default CallToAction