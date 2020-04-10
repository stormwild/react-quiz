import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import { AnswerOptionType } from '../data/quizQuestions';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

type QuizProps = {
  answer: string;
  answerOptions: Array<AnswerOptionType>;
  counter: number;
  question: string;
  questionId: number;
  questionTotal: number;
  onAnswerSelected: (event: React.FormEvent<HTMLInputElement>) => void;
};

const Quiz = ({
  answer,
  answerOptions,
  counter,
  questionId,
  question,
  questionTotal,
  onAnswerSelected,
}: QuizProps) => {
  return (
    <TransitionGroup component='div'>
      <CSSTransition
        className='container'
        key={questionId}
        timeout={{ exit: 500, enter: 800, appear: 500 }}
      >
        <div className='quiz' key={questionId}>
          <QuestionCount counter={questionId} total={questionTotal} />
          <Question content={question} />
          <ul className='answer-options'>
            {answerOptions.map(({ type, content }) => (
              <AnswerOption
                key={content}
                answerContent={content}
                answerType={type}
                answer={answer}
                onAnswerSelected={onAnswerSelected}
              />
            ))}
          </ul>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Quiz;

/*

function App() {
  const ref = React.useRef()
  
  return (
    <Transition domRef={ref}>
      <MaybeDOMmaybeFunctionMaybeClass refThatComponentAccepts={ref} />
    </Transition>
  )
  
  */
