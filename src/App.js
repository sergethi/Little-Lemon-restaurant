import React from 'react';
import "./App.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
