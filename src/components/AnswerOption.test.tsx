import React from 'react';
import { render } from '@testing-library/react';
import AnswerOption from './AnswerOption';

test('renders answer and answerContent passed', () => {
  const answer = 'Avocado';
  const answerContent = 'Avocado';
  const answerType = 'Avocado';
  const onAnswerSelected = (e: React.FormEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value);
  };

  const { getByText } = render(
    <AnswerOption
      answer={answer}
      answerContent={answerContent}
      answerType={answerType}
      onAnswerSelected={onAnswerSelected}
    />
  );

  const answerElement = getByText(`${answer}`);
  const answerContentElement = getByText(`${answerContent}`);
  const answerTypeElement = getByText(`${answerType}`);

  expect(answerElement).toBeInTheDocument();
  expect(answerContentElement).toBeInTheDocument();
  expect(answerTypeElement).toBeInTheDocument();
});
