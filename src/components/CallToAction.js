import React from 'react';
import "./CallToAction.css"
import restaurantFoodImg from "../images/restauranfood.jpg"

function CallToAction() {
  return (
    <div className='action-container'>
        <div className='action-text'>
            <p>Little Lemon</p>
            <p>Chicago</p>
            <a href='/booking'>Reverse table</a>
        </div>
        <div className='action-img'>
            <img src={restaurantFoodImg} alt='food image'/>
        </div>
    </div>
  )
}

export default CallToAction