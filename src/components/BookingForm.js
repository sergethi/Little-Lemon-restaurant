import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bookingCover from "../images/louis-hansel-food-pic.jpg";
import "./BookingForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function BookingForm({ availableTimes, fetchAPI, submitAPI, isSubmitted }) {
  const navigate = useNavigate();

  //form validation
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email:"",
      phoneNumber:"",
      date: "",
      time: "",
      guests: 0,
      occasion: "Birthday",
    },
    onSubmit: (values) => {
      submitAPI(values);
      navigate("/confirm-booking");
    },

    // Note: repeated some validation in form to make some tests pass (eg.required)
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string(),
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
          <label htmlFor="res-firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="res-firstName"
            {...formik.getFieldProps("firstName")}
          />
          <small>{formik.touched.firstName && formik.errors.firstName}</small>
        </div>
        <div className="input-group">
          <label htmlFor="res-lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="res-lastName"
            {...formik.getFieldProps("lastName")}
          />
          <small>{formik.touched.lastName && formik.errors.lastName}</small>
        </div>
        <div className="input-group">
          <label htmlFor="res-email">Email</label>
          <input
            type="email"
            name="email"
            id="res-email"
            {...formik.getFieldProps("email")}
          />
          <small>{formik.touched.email && formik.errors.email}</small>
        </div>
        <div className="input-group">
          <label htmlFor="res-phoneNumber">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            id="res-phoneNumber"
            {...formik.getFieldProps("phoneNumber")}
          />
          <small>{formik.touched.phoneNumber && formik.errors.phoneNumber}</small>
        </div>

        <div className="input-group">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            name="date"
            id="res-date"
            {...formik.getFieldProps("date")}
            required
          />
          <small>{formik.touched.date && formik.errors.date}</small>
        </div>

        <div className="input-group">
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" name="time" {...formik.getFieldProps("time")} required>
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
            min={1}
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
