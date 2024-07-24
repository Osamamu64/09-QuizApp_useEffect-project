import { useState, useCallback } from "react";

import QUESTIONS from "../questions";
import Question from "./Question";
import Summsary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  //using the user answers to get the current question index
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex == QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summsary userAnswers={userAnswers}/>;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
