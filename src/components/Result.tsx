import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export type ResultProps = {
  quizResult: string;
};

const Result = ({ quizResult }: ResultProps) => {
  return (
    <TransitionGroup component='div'>
      <CSSTransition
        className='container result'
        timeout={{ exit: 500, enter: 800, appear: 500 }}
      >
        <div>
          You prefer <strong>{quizResult}</strong>!
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
