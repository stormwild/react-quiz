import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

export type ResultProps = {
  quizResult: string;
};

const Result = ({ quizResult }: ResultProps) => {
  return (
    <CSSTransitionGroup
      className='container result'
      component='div'
      transitionName='fade'
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        You prefer <strong>{quizResult}</strong>!
      </div>
    </CSSTransitionGroup>
  );
};

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
