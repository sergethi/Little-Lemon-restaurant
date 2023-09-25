import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({availableTimes, fetchAPI, submitAPI, isSubmitted}) {
    const navigate = useNavigate();
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("Birthday");

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {date, time, guests, occasion};
      submitAPI(formData)
      navigate("/confirm-booking");
    }
    console.log("availTimes", availableTimes)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e)=> {setDate(e.target.value); fetchAPI(date)}} required/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e)=> setTime(e.target.value)} required>
            {availableTimes.map((time) =>{
                return <option key={time}>{time}</option>
            })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=> setGuests(e.target.value)}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e)=> setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" disabled={!date || !time || !guests}/>
      </form>
    </div>
  );
}

export default BookingForm;
