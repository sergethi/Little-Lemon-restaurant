import React from "react";
import "./RestaurantStory.css";
import restaurantchefB from "../images/restaurantchefB.jpg";
import restaurant from "../images/restaurant.jpg";

function RestaurantStory() {
  return (
    <div className="story-main-container" id="about-section">
      <div className="story-container">
        <div className="story-text">
          <p id="story-title">Little Lemon</p>
          <p id="story-city">Chicago</p>
          <p>
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.
          </p>
          {/* <a href="/booking">Reverse a table</a> */}
        </div>
        <div className="story-img">
          <div className="story-top-img">
            <img src={restaurantchefB} alt="food image" />
          </div>
          <div className="story-bottom-img">
            <img src={restaurant} alt="food image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantStory;
