import { render } from '@testing-library/react';
import React from 'react';
import QA from '../QA';

describe('should render', () => {
  test('should render QA component', () => {
    const { getByTestId } = render(<QA />);
    const qa = getByTestId('questionList');
    expect(qa).toBeTruthy();
  });
});
