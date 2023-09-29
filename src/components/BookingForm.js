import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bookingCover from "../images/louis-hansel-food-pic.jpg";
import "./BookingForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function BookingForm({ availableTimes, fetchAPI, submitAPI, isSubmitted }) {
  const navigate = useNavigate();
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  // const [guests, setGuests] = useState(0);
  // const [occasion, setOccasion] = useState("Birthday");

  //form validation
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: 0,
      occasion: "Birthday",
    },
    onSubmit: (values) => {
      submitAPI(values);
      navigate("/confirm-booking");
    },
    // handleChange: (values) =>{
    //   fetchAPI(values.date)
    // },
    validationSchema: Yup.object({
      date: Yup.date().required("Required"),
      time: Yup.string().required("Required"),
      guests: Yup.number()
        .min(1, "Must be at least 1 guest")
        .required("required"),
    }),
  });
  useEffect(() => {
    if (formik.values.date !== "") fetchAPI(formik.values.date);
  }, [formik.values.date]);
  // if(formik.values.date){
  //   fetchAPI(formik.values.date)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = { date, time, guests, occasion };
  //   submitAPI(formData);
  //   navigate("/confirm-booking");
  // };
  console.log("availTimes", availableTimes);
  return (
    <div className="bookingForm-main-container">
      <div className="bookingForm-cover-img">
        <img src={bookingCover} alt="cover image" />
      </div>
      <p data-testid="booking-main" id="booking-form-title">
        Book a table
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-group">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            name="date"
            id="res-date"
            {...formik.getFieldProps("date")}
          />
          <small>{formik.touched.date && formik.errors.date}</small>
        </div>

        <div className="input-group">
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" name="time" {...formik.getFieldProps("time")}>
            {availableTimes.map((time) => {
              return <option key={time}>{time}</option>;
            })}
          </select>
          <small>{formik.touched.time && formik.errors.time}</small>
        </div>
        <div className="input-group">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            name="guests"
            id="guests"
            {...formik.getFieldProps("guests")}
          />
          <small>{formik.touched.guests && formik.errors.guests}</small>
        </div>
        <div className="input-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            {...formik.getFieldProps("occasion")}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        <input
          className="input-button"
          type="submit"
          value="Make Your reservation"
          disabled={
            formik.errors.date || formik.errors.time || formik.errors.guests
          }
        />
      </form>
    </div>
  );
}

export default BookingForm;
