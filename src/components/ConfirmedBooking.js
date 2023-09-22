import React from "react";
import "./ConfirmedBooking.css";

export default function ConfirmedBooking() {
  return (
    <div className="confirm-container">
      <div className="confirm-content">
        <p>Your are all set !</p>
        <p>Your confirmation email in on the way</p>
        <a href="/menu">Back to the main menu</a>
      </div>
    </div>
  );
}
