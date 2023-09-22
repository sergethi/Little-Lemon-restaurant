import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App';

test('renders home components', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const homeComponents = screen.getByTestId("home-component");
  expect(homeComponents).toBeInTheDocument();
});



