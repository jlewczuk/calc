import React, { useState, useRef } from 'react';
import Button from "../../components/Button";
import Input from "../../components/Input";
import ClearButton from "../../components/ClearButton";
import { useAnswers } from '../../modules/Answers';
import s from "./App.module.css";
import { Link } from 'react-router-dom';
import ButtonNav from '../../components/ButtonNav';

export const App = () => {
  const [input, setInput] = useState('');
  const previousNumber = useRef('');
  const operator = useRef('');
  const currentNumber = useRef('');
  const { addAnswer } = useAnswers();

  const addToInput = val => {
    if ((val === "0" && input !== "0") || val !== "0") {
      setInput(input + val);
    }
  }

  const addDecimal = val => {
    if (input.indexOf(".") === -1) {
      setInput(input + val);
    }
  }

  const clearInput = () => {
    setInput('');
  }

  const count = (operatorName) => () => {
    previousNumber.current = input;
    clearInput();
    operator.current = operatorName;
  }

  const evaluate = () => {
    addAnswer(input);
    currentNumber.current = input;

    if (operator.current === "plus") {
      setInput(parseFloat(previousNumber.current) + parseFloat(currentNumber.current));
    } else if (operator.current === "subtract") {
      setInput(parseFloat(previousNumber.current) - parseFloat(currentNumber.current));
    } else if (operator.current === "divide") {
      setInput(parseFloat(previousNumber.current) / parseFloat(currentNumber.current));
    } else if (operator.current === "multiply") {
      setInput(parseFloat(previousNumber.current) * parseFloat(currentNumber.current));
    }
  }

  return (
    <div className={s.app}>
      <div className={s.calcWrapper}>
        <div className={s.row}>
          <Input input={input}/>
        </div>
        <div className={s.row}>
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={count("divide")}>/</Button>
        </div>
        <div className={s.row}>
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={count("multiply")}>*</Button>
        </div>
        <div className={s.row}>
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={count("plus")}>+</Button>
        </div>
        <div className={s.row}>
          <Button handleClick={addDecimal}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={evaluate}>=</Button>
          <Button handleClick={count("subtract")}>-</Button>
        </div>
        <div className={s.row}>
          <ClearButton handleClear={clearInput}>Clear</ClearButton>
        </div>
        <Link to="/Sub" style={{ textDecoration: 'none' }}><ButtonNav>Show results</ButtonNav></Link>
      </div>
    </div>
  );
}
