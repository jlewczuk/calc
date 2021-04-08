import s from "./Button.module.css";

const Button = ({ children, handleClick }) => {
  const isOperator = (val) => !isNaN(val) || val === '.' || val === '=';

  return (
    <div
      className={`${s.button} ${isOperator(children) ? "" : s.operator}`}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  )
}

export default Button;
