import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import App from './App';

describe('App component tests', ()=> {
  it('should renders App without fail', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('heading')).toHaveTextContent('Home')
  });

  it('navigation should work properly', () => {
    const { getByText } = render(<App />)
    fireEvent.click(getByText(/Coffee/i))
    const linkElement = getByText('Coffee');
    expect(linkElement).toBeInTheDocument();
  })
})

