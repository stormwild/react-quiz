import React from 'react';
import PropTypes from 'prop-types';

export type AnswerOptionProps = {
  answer: string;
  answerContent: string;
  answerType: string;
  onAnswerSelected: (event: React.FormEvent<HTMLInputElement>) => void;
};

const AnswerOption = ({
  answer,
  answerContent,
  answerType,
  onAnswerSelected,
}: AnswerOptionProps) => {
  return (
    <li className='answer-option'>
      <input
        type='radio'
        className='radio-custom-button'
        name='answerOption'
        checked={answerType === answer}
        id={answerType}
        value={answerType}
        disabled={!!answer}
        onChange={onAnswerSelected}
      />
      <label className='radio-custom-label' htmlFor={answerType}>
        {answerContent}
      </label>
    </li>
  );
};

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default AnswerOption;
