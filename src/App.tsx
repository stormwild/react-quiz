import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import quizQuestions, {
  QuestionType,
  AnswerOptionType,
} from './data/quizQuestions';
import Result from './components/Result';
import Quiz from './components/Quiz';

type AnswersCount = {
  [key: string]: number;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState<Array<AnswerOptionType>>(
    []
  );
  const [answer, setAnswer] = useState('');
  const [answersCount, setAnswersCount] = useState<AnswersCount>({});
  const [result, setResult] = useState('');

  useEffect(() => {
    const shuffled = quizQuestions.map(
      ({ answers }: QuestionType): Array<AnswerOptionType> => {
        return shuffle(answers);
      }
    );

    setQuestion(quizQuestions[0].question);
    setAnswerOptions(shuffled[0]);
  }, []);

  const shuffle = (data: Array<AnswerOptionType>): Array<AnswerOptionType> => {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  };

  const setNextQuestion = () => {
    const ctr: number = counter + 1;
    setCounter(ctr);
    setQuestionId(questionId + 1);
    setQuestion(quizQuestions[ctr].question);
    setAnswerOptions(quizQuestions[ctr].answers);
    setAnswer('');
  };

  const getResults = () => {
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );
  };

  const setResults = (result: string[]) => {
    if (result.length === 1) {
      setResult(result[0]);
    } else {
      setResult('Undetermined');
    }
  };

  const handleSelected = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setAnswer(value);
    setAnswersCount({
      ...answersCount,
      [value]: (answersCount[value] || 0) + 1,
    });

    if (questionId < quizQuestions.length) {
      setTimeout(() => setNextQuestion(), 300);
    } else {
      setTimeout(() => setResults(getResults()), 300);
    }
  };

  const renderResult = () => <Result quizResult={result} />;

  const renderQuiz = () => (
    <Quiz
      counter={counter}
      answer={answer}
      answerOptions={answerOptions}
      questionId={questionId}
      question={question}
      questionTotal={quizQuestions.length}
      onAnswerSelected={handleSelected}
    />
  );

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>React Quiz</h2>
      </header>
      {result ? renderResult() : renderQuiz()}
    </div>
  );
};

export default App;
