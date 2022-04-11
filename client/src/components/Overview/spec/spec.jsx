import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Overview from "../Overview";

// describe('Add to Cart Component', () => {
//   it('should render a Nav Bar', async () => {
//     const { getByTestId } = render(<Overview />);
//     const navBar = getByTestId('navbar');
//     await waitFor(() => {
//       expect(navBar).toBeTruthy()
//     });
//   });
// });

describe('Add to Cart Component', () => {
  it('should render the product overview', () => {
    const { getByTestId } = render(<Overview />);
    const container = getByTestId('lordContainer');
    expect(container).toBeTruthy();
  });
});