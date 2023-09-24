import {useBooking, bookingReducer, SET_TIMES, SET_SUBMITTED} from './useBooking';

const initialState = {
    times: ["17:00", "18:00", "19:00", "20:00"],
    isSubmitted: false
};

test('initialize times', () => {
    expect(initialState.times).toHaveLength(4);
});

test('update times if reducer is called with state and an action', () => {
    const newState = bookingReducer(initialState, {
        type: SET_TIMES,
        payload: ["18:00", "19:00", "20:00", "21:00", "22:00"]
    });
    expect(newState.times).toHaveLength(5);
});