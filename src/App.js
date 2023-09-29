import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";
import ConfirmedBooking from "./components/ConfirmedBooking";
import useBooking from "./services/useBooking";
import OrderOnline from "./components/OnlineMenu";
import Login from "./components/Login";

function App() {
  const {availableTimes, isSubmitted, fetchAPI, submitAPI} = useBooking()

  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/booking"
            element={
              <Booking availableTimes={availableTimes} fetchAPI={fetchAPI} submitAPI={submitAPI} isSubmitted={isSubmitted}/>
            }
          />
          <Route path="/confirm-booking" element={<ConfirmedBooking />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
