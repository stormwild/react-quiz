import React from 'react';
import { render } from '@testing-library/react';
import Question from './Question';

test('renders content passed', () => {
  const content = `Hello world!`;
  const { getByText } = render(<Question content={content} />);
  const contentElement = getByText(content);
  expect(contentElement).toBeInTheDocument();
});
