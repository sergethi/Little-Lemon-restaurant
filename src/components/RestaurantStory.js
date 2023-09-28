import React from "react";
import "./RestaurantStory.css";
import restaurantchefB from "../images/restaurantchefB.jpg";
import restaurant from "../images/restaurant.jpg"

function RestaurantStory() {
  return (
    <div className="story-main-container">
      <div className="story-container">
        <div className="story-text">
          <p id="story-title">Little Lemon</p>
          <p id="story-city">Chicago</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
            ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque
            massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor
            condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in
            accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit
            lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi
            hendrerit consequat. In dictum ligula in elit euismod malesuada.
            Curabitur varius augue id tempus ultricies. Mauris suscipit porta
            odio, et pretium nibh scelerisque ut.
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
