import { render } from '@testing-library/react';
import React from 'react';
import QA from '../QA';
import QuestionList from '../components/QuestionList';

describe('should render', () => {
  test('should render QA component', () => {
    const { getByTestId } = render(<QA />);
    const qa = getByTestId('QA');
    expect(qa).toBeTruthy();
  });

  // test('should render QuestionList component', () => {
  //   const { getByTestId } = render(<QuestionList />);
  //   const qa = getByTestId('questionList');
  //   expect(qa).toBeTruthy();
  // });
});
