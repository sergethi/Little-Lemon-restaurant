import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // import and spread the real module
  useNavigate: () => jest.fn(), // then override the specific functions you want to mock
}));
const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const fetchAPI = jest.fn();
const submitAPI = jest.fn();
const isSubmitted = jest.fn();
// const mockNavigate = jest.fn();

test("renders choose date label", () => {
  render(
    <BookingForm availableTimes={mockAvailableTimes} fetchAPI={fetchAPI} submitAPI={submitAPI} isSubmitted={isSubmitted} />
  );
  const dateLabel = screen.getByText(/Choose date/i);
  const timeLabel = screen.getByText(/Choose time/i);
  const guestsLabel = screen.getByText(/Number of guests/i);
  const occasionLabel = screen.getByText(/Occasion/i);
  const button = screen.getByRole('button', {name: /Make Your reservation/i});
  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
  expect(guestsLabel).toBeInTheDocument();
  expect(occasionLabel).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();
});

test("User is able to submit the form ", () => {
  const date = "2023-09-20";
  const time = "18:00";
  const guests = "2";
  const occasion = "Birthday";
  render(
    <BookingForm availableTimes={mockAvailableTimes} fetchAPI={fetchAPI} submitAPI={submitAPI} isSubmitted={isSubmitted} />
  );

  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: date } });

  const timeInput = screen.getByLabelText(/Choose time/i);
  fireEvent.change(timeInput, { target: { value: time } });

  const guestsInput = screen.getByLabelText(/Number of guests/i);
  fireEvent.change(guestsInput, { target: { value: guests } });

  const occasionInput = screen.getByLabelText(/Occasion/i);
  fireEvent.change(occasionInput, { target: { value: occasion } });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(submitAPI).toHaveBeenCalledWith({
      date,
      time,
      guests,
      occasion,
  });
  // expect(mockNavigate).toHaveBeenCalledWith("/confirm-booking");
});
