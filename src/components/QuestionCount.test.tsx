import React from 'react';
import { render } from '@testing-library/react';
import QuestionCount from './QuestionCount';

test('renders count and total passed', () => {
  const counter = 1;
  const total = 5;
  const { getByText } = render(
    <QuestionCount counter={counter} total={total} />
  );
  const counterElement = getByText(`${counter}`);
  const totalElement = getByText(`${total}`);
  expect(counterElement).toBeInTheDocument();
  expect(totalElement).toBeInTheDocument();
});
