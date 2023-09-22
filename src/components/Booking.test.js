import { render, screen } from '@testing-library/react';
import Booking from './Booking';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // import and spread the real module
  useNavigate: () => jest.fn(), // then override the specific functions you want to mock
}));
const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const fetchAPI = jest.fn();
const submitAPI = jest.fn();
const isSubmitted = jest.fn();
test('renders Book a table', () => {

  render(<Booking availableTimes={mockAvailableTimes} fetchAPI={fetchAPI} submitAPI={submitAPI} isSubmitted={isSubmitted} />);
  const title = screen.getByTestId("booking-main")
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Book a table')
});