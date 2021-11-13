'use strict';

import { QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID } from '../constants.js';
import { showCurrentQuestion, showCurrentScore } from '../handlers/questionHandlers.js';
import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { createNextQuestionButtonElement, createScoreElement } from '../views/questionViews.js';
import { quizData } from '../data.js';

const initializeQuiz = () => {
  quizData.currentQuestionIndex = 0;
  setupQuizHTML();
  showCurrentQuestion();
  showCurrentScore();
};

const setupQuizHTML = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  quizContainer.appendChild(createScoreElement(quizData.currentTotalScore));
  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });

  quizContainer.appendChild(questionContainer);

  const nextQuestionButton = createNextQuestionButtonElement();
  quizContainer.appendChild(nextQuestionButton);

  console.log(quizContainer);
  userInterfaceContainer.appendChild(quizContainer);
};

window.addEventListener('load', initializeQuiz);