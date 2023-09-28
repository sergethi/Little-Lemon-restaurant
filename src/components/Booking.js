import React from 'react';
import BookingForm from './BookingForm';
import "./Booking.css"

function Booking({availableTimes, fetchAPI, submitAPI, isSubmitted}) {
  return (
    <div className='booking-main-container'>
        {/* <div data-testid="booking-main">Book a table</div> */}
        <BookingForm availableTimes={availableTimes} fetchAPI={fetchAPI} submitAPI={submitAPI} isSubmitted={isSubmitted}/>
    </div>
  )
}

export default Booking