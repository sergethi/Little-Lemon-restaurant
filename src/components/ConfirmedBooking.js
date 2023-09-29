import React from "react";
import "./ConfirmedBooking.css";
import { Link } from "react-router-dom";

export default function ConfirmedBooking() {
  return (
    <div className="confirm-container">
      <div className="confirm-content">
        <p>Your are all set ! 🎉</p>
        <p>Your confirmation email is on the way</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}
