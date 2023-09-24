import { useState, useReducer } from 'react';

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

function useBooking() {
    const initialState = {
        times: ["17:00", "18:00", "19:00", "20:00"],
        isSubmitted: false
    };

    const [state, dispatch] = useReducer(bookingReducer, initialState);

    const fetchAPI = async (date) => {
        // Mocked API call
        await new Promise(res => setTimeout(res, 1000)); // Simulating network delay

        // Replace with actual API call and logic
        const mockTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];
        
        // Dispatch the new times to the reducer
        dispatch({ type: SET_TIMES, payload: mockTimes });

        return mockTimes;
    };

    const submitAPI = async (formData) => {
        // Mocked API call
        await new Promise(res => setTimeout(res, 1000)); // Simulating network delay

        // Replace with actual API call and logic
        console.log('Submitted data:',  );

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
