import { createContext, useState, useContext } from 'react';

const Answers = createContext();

export const AnswersProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  const addAnswer = (ans) => {
    setAnswers([...answers, ans]);
  }

  return (
    <Answers.Provider value={{ answers, addAnswer }}>
      {children}
    </Answers.Provider>
  )
};

export const useAnswers = () => useContext(Answers);