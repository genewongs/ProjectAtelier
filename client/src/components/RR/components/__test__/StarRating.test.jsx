import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StarStyled from '../styles/StyledStarRating';

describe('StyledStars', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StarStyled />, div);
  });

  it('renders Stars Correctly', () => {
    const { getByTestId } = render(
      <StarStyled percent="80%" fontSize="20px">
        ★★★★★
      </StarStyled>,
    );
    expect(getByTestId('StyledStar')).toHaveTextContent('★★★★★');
  });
});
