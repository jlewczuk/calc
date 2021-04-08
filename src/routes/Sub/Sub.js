import { useAnswers } from '../../modules/Answers';
import s from "./Sub.module.css";
import { Link } from 'react-router-dom';
import ButtonNav from '../../components/ButtonNav';

export const Sub = () => {
  const { answers } = useAnswers();
  return (
    <>
      <Link to="/App" style={{ textDecoration: 'none' }}><ButtonNav>Go to calc</ButtonNav></Link>
      <ul>
        {answers.map((answer) => (
          <li>{answer}</li>
        ))}
      </ul>
    </>
  );
}
