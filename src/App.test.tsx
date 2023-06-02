import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import userEvent from '@testing-library/user-event';

test('renders learn react link', async () => {
  render(<React.StrictMode><Provider store={store}><App /></Provider></React.StrictMode>);

  expect(screen.getByText("null")).toBeInTheDocument(); 
  expect(await screen.findByText('"foo"', {
    
  }, {timeout: 2000})).toBeInTheDocument(); 

  expect(screen.getByText("0")).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", {name: "Increment value"})); 
  expect(screen.queryByText("0")).not.toBeInTheDocument();
  expect(screen.getByText("1")).toBeInTheDocument();

});
