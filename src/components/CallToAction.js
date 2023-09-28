import React from 'react';
import "./CallToAction.css"
import restaurantFoodImg from "../images/restauranfood.jpg";
import { Link } from 'react-router-dom';

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
          <Link to="/booking">Reverse a table</Link>
        </div>
        <div className="action-img">
          <img src={restaurantFoodImg} alt="food image" />
        </div>
      </div>
    </div>
  );
}

export default CallToAction