import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { waitFor } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // import and spread the real module
  useNavigate: () => jest.fn(), // then override the specific functions you want to mock
}));
const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const fetchAPI = jest.fn();
const submitAPI = jest.fn();
const isSubmitted = jest.fn();


test("renders booking form labels", () => {
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
});
beforeEach(() => {
  jest.clearAllMocks();
});
test("validate that the correct attributes are applied to each input", () => {
  render(
    <BookingForm availableTimes={mockAvailableTimes} fetchAPI={fetchAPI} submitAPI={submitAPI} isSubmitted={isSubmitted} />
  );
  const dateInput = screen.getByLabelText("Choose date");
  const timeInput = screen.getByLabelText("Choose time");
  const guestsInput = screen.getByLabelText("Number of guests");
  // const occasionInput = screen.getByLabelText("Occasion");
  const submitInput = screen.getByRole('button', {name: /Make Your reservation/i});
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("required");
  expect(timeInput).toHaveAttribute("required");
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(submitInput).toHaveAttribute("type", "submit");

})

test("User is able to submit the form ", async() => {
  const firstName = "serge";
  const lastName = "Tassemb";
  const email = "serge@gmail.com";
  const phoneNumber = "646-895-6321";
  const date = "2023-09-20";
  const time = "18:00";
  const guests = 2;
  const occasion = "Birthday";
  render(
    <BookingForm availableTimes={mockAvailableTimes} fetchAPI={fetchAPI} submitAPI={submitAPI} isSubmitted={isSubmitted} />
  );
  
  const firstNameInput = screen.getByLabelText(/First Name/i);
  fireEvent.change(firstNameInput, { target: { value: firstName } });

  const lastNameInput = screen.getByLabelText(/Last Name/i);
  fireEvent.change(lastNameInput, { target: { value: lastName } });

  const emailInput = screen.getByLabelText(/Email/i);
  fireEvent.change(emailInput, { target: { value: email } });

  const phoneNumberInput = screen.getByLabelText(/Phone Number/i);
  fireEvent.change(phoneNumberInput, { target: { value: phoneNumber } });

  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: date } });

  const timeInput = screen.getByLabelText(/Choose time/i);
  fireEvent.change(timeInput, { target: { value: time } });

  const guestsInput = screen.getByLabelText(/Number of guests/i);
  fireEvent.change(guestsInput, { target: { value: guests } });

  const occasionInput = screen.getByLabelText(/Occasion/i);
  fireEvent.change(occasionInput, { target: { value: occasion } });

   

  const submitButton = screen.getByRole("button",  {name: /Make Your reservation/i});
  // Ensure the button is not disabled
  expect(submitButton).not.toBeDisabled();
  fireEvent.click(submitButton);

  await waitFor(() => {
     expect(submitAPI).toHaveBeenCalledWith({
      firstName,
      lastName,
      email,
      phoneNumber,
      date,
      time,
      guests,
      occasion,
  });
  })

 

});
