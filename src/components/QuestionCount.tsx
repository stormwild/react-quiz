import React from 'react';
import PropTypes from 'prop-types';

type QuestionCountProps = {
  counter: number;
  total: number;
};

const QuestionCount = ({ counter, total }: QuestionCountProps) => {
  return (
    <div className='question-count'>
      Question <span>{counter}</span> of <span>{total}</span>
    </div>
  );
};

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
