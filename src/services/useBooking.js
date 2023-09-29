import { useState, useReducer, useEffect } from "react";

// Action Types
export const SET_TIMES = "SET_TIMES";
export const SET_SUBMITTED = "SET_SUBMITTED";

// Reducer function
export const bookingReducer = (state, action) => {
  switch (action.type) {
    case SET_TIMES:
      return { ...state, times: action.payload };
    case SET_SUBMITTED:
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};
// Utility function to shuffle an array
const shuffleArray = (array) => {
  let shuffled = array.slice(); // create a copy of the array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap elements
  }
  return shuffled;
};

function useBooking() {
  const initialState = {
    times: ["7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"],
    isSubmitted: false,
  };

  const [state, dispatch] = useReducer(bookingReducer, initialState);

  const fetchAPI = async (date) => {
    console.log("Fetching times for date:", date);
    // Mocked API call
    await new Promise((res) => setTimeout(res, 1000)); // Simulating network delay

    // Replace with actual API call and logic
    const allTimes = [
      "4:00 PM",
      "4:30 PM",
      "5:00 PM",
      "5:30 PM",
      "6:00 PM",
      "6:30 PM",
      "7:00 PM",
      "7:30 PM",
      "8:00 PM",
      "8:30 PM",
      "9:00 PM",
      "9:30 PM",
      "10:00 PM",
    ];
    const randomLength = Math.floor(Math.random() * 5) + 4; // This gives a number between 4 and 8
    const mockTimes = shuffleArray(allTimes)
      .slice(0, randomLength)
      .sort((a, b) => a.localeCompare(b)); // Sorting times in ascending order
    // Dispatch the new times to the reducer
    dispatch({ type: SET_TIMES, payload: mockTimes });

    return mockTimes;
  };

  const submitAPI = async (formData) => {
    // Mocked API call
    await new Promise((res) => setTimeout(res, 1000)); // Simulating network delay

    // Replace with actual API call and logic
    console.log("Submitted data:");

    // Dispatch the submission status to the reducer
    dispatch({ type: SET_SUBMITTED });

    return true;
  };

  return {
    availableTimes: state.times,
    isSubmitted: state.isSubmitted,
    fetchAPI,
    submitAPI,
  };
}

export default useBooking;
